
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogContent } from '@angular/material/dialog';

import { Router } from '@angular/router';
import { MatCard, MatCardHeader, MatCardTitle, MatCardSubtitle, MatCardContent, MatCardActions, MatCardFooter } from '@angular/material/card';
import { CdkScrollable } from '@angular/cdk/scrolling';
import { QRCodeModule } from 'angularx-qrcode';
import { MatButton } from '@angular/material/button';
import { MatProgressBar } from '@angular/material/progress-bar';
import { CommonModule } from '@angular/common';
import { TranslocoModule } from '@ngneat/transloco';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import * as CryptoJS from 'crypto-js';

@Component({
    selector: 'app-qrcode',
    templateUrl: './qrcode.component.html',
    styleUrls: ['./qrcode.component.css'],
    standalone: true,
    imports: [CommonModule, TranslocoModule, MatFormFieldModule, MatInputModule, MatCard, MatCardHeader, MatCardTitle, MatCardSubtitle, MatCardContent, CdkScrollable, MatDialogContent, QRCodeModule, MatCardActions, MatButton, MatCardFooter, MatProgressBar]
})
export class QRCodeComponent implements OnInit {
  constructor( public dialogRef: MatDialogRef<QRCodeComponent>, @Inject(MAT_DIALOG_DATA) public data: any, private router: Router) { }
  
  ngOnInit() {
    if (this.data?.preAuthorized){
      this.data.userPin = this.getPinCode();
    }
  }

  getPinCode(): string {
    const hash = CryptoJS.SHA256(this.data.nonce).toString(CryptoJS.enc.Hex);
    const numericHash = parseInt(hash.substring(0, 8), 16);
    return (numericHash % 10000).toString().padStart(4, '0');
  }

  onClose(): void {
    this.dialogRef.close();
    this.router.navigate(['/home']);
    parent.close
  }
}


