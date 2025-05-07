// Copyright 2025 Atos Spain S.A. All rights reserved.
// 
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
// 
//     https://www.apache.org/licenses/LICENSE-2.0
// 
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import { Component, inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AgentClientService } from 'src/app/services/agent-client/agent-client.service';



import { QRCodeComponent } from '../dialogs/qrcode/qrcode.component';
import { environment } from 'src/environments/environment';
import { v4 as uuidv4 } from 'uuid'; 
import { SuccessComponent } from '../dialogs/success/success.component';
import { SSEEvent } from 'src/app/models/sseEvent';


@Component({
  selector: 'app-issue-vc',
  templateUrl: './issue-vc.component.html',
  styleUrls: ['./issue-vc.component.css'],
  standalone: true,
  imports: [MatDialogModule]
})
export class IssueVCComponent implements OnInit {
  private _snackBar = inject(MatSnackBar);
  dialogQRRef: MatDialogRef<QRCodeComponent> | undefined;

  type: string = ""
  constructor(
    public dialog: MatDialog, 
    private agentService: AgentClientService
  ) { }

  ngOnInit() {
    this.getOffer();
  }

  getOffer(): void {
    let type = String(environment.USELF_PID)
    let nonce = uuidv4();
  
    this.agentService.getOffer(type,nonce)
      .subscribe(response => {
        this.openQRCodeDialog(response,nonce,true);
        this.agentService.getNotifications(this, nonce, "ISSUED_CREDENTIAL", this.issueCredentialSuccess)
      }); 
  }

  issueCredentialSuccess(_this: any, e: string) {
    _this._snackBar.open("Successful Authentication", "Thank you!")
    _this.dialogQRRef.close();
    _this.openSuccessDialog(e);
  }

  openSuccessDialog(event: SSEEvent): void {
    const dialogConfig = new MatDialogConfig();
    // if (window.innerWidth <= 768) {
    //   dialogConfig.width = '80%';
    // } else {
    //   dialogConfig.width = '30%';
    // }
    dialogConfig.autoFocus = false; // Disable autofocus
    dialogConfig.hasBackdrop = true; // Enable backdrop
    dialogConfig.data = { event: event};
    dialogConfig.disableClose = true;
    let dialogSuccessRef = this.dialog.open(SuccessComponent, dialogConfig);
  }

  openQRCodeDialog(qrData: string, nonce: string, preAuthorized: boolean = false): void {
    const dialogConfig = new MatDialogConfig();
    if (window.innerWidth <= 768) {
      dialogConfig.width = '80%';
    } else {
      dialogConfig.width = '30%';
    }
    dialogConfig.autoFocus = false; // Disable autofocus
    dialogConfig.hasBackdrop = true; // Enable backdrop
    dialogConfig.panelClass = 'app-qrcode'; // Set a custom CSS class for the dialog
    dialogConfig.data = { qrData: qrData, nonce: nonce, preAuthorized: preAuthorized };
    dialogConfig.disableClose = true;
    this.dialogQRRef = this.dialog.open(QRCodeComponent, dialogConfig);
  }
}