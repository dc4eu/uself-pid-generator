import { Component } from '@angular/core';
import { TranslocoModule } from '@ngneat/transloco';
import { LanguageSelectorComponent } from '../language-selector/language-selector.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  imports: [CommonModule, LanguageSelectorComponent,TranslocoModule]
})
export class HeaderComponent {

}
