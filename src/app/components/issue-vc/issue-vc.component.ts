import { Component, inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AgentClientService } from 'src/app/services/agent-client/agent-client.service';

import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { TranslocoModule } from '@ngneat/transloco';

import { LanguageSelectorComponent } from "../language-selector/language-selector.component";
import { QRCodeComponent } from '../qrcode/qrcode.component';
import { environment } from 'src/environments/environment';
import { v4 as uuidv4 } from 'uuid'; 


@Component({
  selector: 'app-issue-vc',
  templateUrl: './issue-vc.component.html',
  styleUrls: ['./issue-vc.component.css'],
  standalone: true,
  imports: [TranslocoModule, LanguageSelectorComponent]
})
export class IssueVCComponent implements OnInit {
  private _snackBar = inject(MatSnackBar);

  type: string = ""
  constructor(private route: ActivatedRoute, public dialog: MatDialog, private agentService: AgentClientService, private snackBar: MatSnackBar, private router: Router) { }

  ngOnInit() {
    this.getOffer();
  }

  getOffer(): void {
    let type = String(environment.PID)
    let nonce = uuidv4();
  
    this.agentService.getOffer(type,nonce)
      .subscribe(response => {
        this.openQRCodeDialog(response,nonce,true);
        this.agentService.getNotifications(this, nonce, "ISSUED_CREDENTIAL", this.issueCredentialSuccess)
      }); 
  }

  issueCredentialSuccess(_this: any, e: string) {
    _this._snackBar.open("Successful Authentication", "Thank you!")
    _this.dialogRef.close();
    _this.router.navigate(['/home']);
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
    const dialogRef = this.dialog.open(QRCodeComponent, dialogConfig);
  }
}