import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslocoModule } from '@ngneat/transloco';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { Router, RouterLink } from '@angular/router';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone: true,
  imports: [RouterLink, CommonModule, TranslocoModule]
})
export class HomeComponent {
  userLoginOn: boolean = false;
  user: string = "";
  constructor(
    private router: Router,
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,

  ) {
    this.matIconRegistry.addSvgIcon(
      "logo_eviden_black",
      this.domSanitizer.bypassSecurityTrustResourceUrl("assets/img/logo_eviden_black.svg")
    );
  }
}