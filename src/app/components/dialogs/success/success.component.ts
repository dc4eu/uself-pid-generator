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

import { CommonModule } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { TranslocoModule } from '@ngneat/transloco';
import {MatExpansionModule} from '@angular/material/expansion';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { jwtDecode } from 'jwt-decode';
import { SSEEvent, Status } from 'src/app/models/sseEvent';
import { NgxJsonViewerModule } from 'ngx-json-viewer';

@Component({
  selector: 'app-success',
  standalone: true,
  templateUrl: './success.component.html',
  styleUrl: './success.component.css',
  imports: [CommonModule, TranslocoModule, MatCardModule, MatIconModule, MatButtonModule,MatExpansionModule,NgxJsonViewerModule]
})
export class SuccessComponent implements OnInit {

  issuing:boolean = false;
  verifying:boolean = false;
  error:boolean = false;
  credential:any = {};
  credentialString:string = "";
  result: string = "";
  report: any = {};
  reportL0: any[] = [];
  reportKeysL0: string[] = ["verifyVerifiablePresentationSignature","validatePresentationDefinition"];
  reportKeysL1: string[] = ["validateVerifiablePresentation"];
  reportKeysL2: string[] = ["validateCredentialsInPresentation","verifyCredentialSignatures","validateIssuerRegistry"];
  constructor(
    public dialogRef: MatDialogRef<SuccessComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private router: Router
  ) { }

  ngOnInit() {
    if (this.data) {
      let event = this.data.event as SSEEvent;
      if (event.status == Status.ISSUED_CREDENTIAL || event.status.toString()=="ISSUED_CREDENTIAL") {
        this.issuing = true;
        let decoded = jwtDecode(event.message);
        this.credential = decoded;
        this.credentialString = JSON.stringify(decoded, null, 2);
      }
      if (event.status == Status.VERIFICATION_RESULT || event.status.toString()=="VERIFICATION_RESULT") {
        let report = JSON.parse(event.message);
        if (!report.validationResult.result) {
          this.error = true;
        } 
        this.verifying = true;
        this.result = report.validationResult.message;
        this.report = report.validationPresentationResult
        this.reportL0.push(report.validationPresentationResult["verifyVerifiablePresentationSignature"]);
        this.reportL0.push(report.validationPresentationResult["validatePresentationDefinition"]); 
      }

    }
  }
  onClose(): void {
    this.dialogRef.close();
    this.router.navigate(['/home']);
    parent.close
  }

}
