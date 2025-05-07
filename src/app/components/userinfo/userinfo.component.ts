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

import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { MatSelectModule, MatSelect } from '@angular/material/select';
import { MatFormFieldModule, MatFormField, MatLabel } from '@angular/material/form-field';
import { Router } from '@angular/router';
import { UserInfo } from 'src/app/models/userinfo';
import { environment } from 'src/environments/environment';
import { MatCard, MatCardHeader, MatCardTitle, MatCardSubtitle, MatCardContent, MatCardActions, MatCardFooter } from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { MatInput } from '@angular/material/input';
import { MatOption } from '@angular/material/core';
import { MatButton } from '@angular/material/button';


@Component({
    selector: 'app-userinfo',
    templateUrl: './userinfo.component.html',
    styleUrls: ['./userinfo.component.css'],
    standalone: true,
    imports: [MatCard, MatCardHeader, MatCardTitle, MatCardSubtitle, MatCardContent, FormsModule, MatFormField, MatLabel, MatInput, MatSelect, MatOption, MatCardActions, MatButton, MatCardFooter]
})
export class UserInfoComponent implements OnInit {

  user: any // Create a new instance of the UserInfo class
  selectedType = "auth"

  constructor(public dialogRef: MatDialogRef<UserInfoComponent>, @Inject(MAT_DIALOG_DATA) public data: any, private router: Router) { }
  
  ngOnInit() {
    this.user = this.data.user;
  }

  onSubmit() {
    this.dialogRef.close();
    let issueURL = '/issue/'+ encodeURIComponent(environment.USER_INFO_SAME_IN_TIME)+'/'+encodeURIComponent(this.user.email);
    this.router.navigate([issueURL]),
    parent.close
  }

  onClose() {
    this.dialogRef.close();
    this.router.navigate(['/home']);
    parent.close
  }

}
