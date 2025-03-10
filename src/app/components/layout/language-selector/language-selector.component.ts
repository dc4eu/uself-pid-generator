import { Component } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-language-selector',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './language-selector.component.html',
  styleUrl: './language-selector.component.css'
})
export class LanguageSelectorComponent {
  public languagesList = [
    { imgUrl: '/assets/img/flags/united-kingdom-flag.png', code: 'en', name: 'English', shorthand: 'ENG' },
    { imgUrl: '/assets/img/flags/spain-flag.png', code: 'es', name: 'Spanish', shorthand: 'ESP' },
    { imgUrl: '/assets/img/flags/catalonia-flag.png', code: 'cat', name: 'Catalan', shorthand: 'CAT' },
    { imgUrl: '/assets/img/flags/france-flag.png', code: 'fra', name: 'Français', shorthand: 'FRA' },
    { imgUrl: '/assets/img/flags/deutschland-flag.png', code: 'deu', name: 'Deutsch', shorthand: 'DEU' },
    { imgUrl: '/assets/img/flags/nederlands-flag.png', code: 'ned', name: 'Nederlands', shorthand: 'NED' },

    { imgUrl: '/assets/img/flags/magyarorszag-flag.png', code: 'mag', name: 'Magyar', shorthand: 'MAG' }, //Hungria
    { imgUrl: '/assets/img/flags/portugal-flag.png', code: 'por', name: 'Português', shorthand: 'POR' },
    { imgUrl: '/assets/img/flags/romania-flag.png', code: 'rom', name: 'Română', shorthand: 'ROM' },
    { imgUrl: '/assets/img/flags/polska-flag.png', code: 'pol', name: 'Polski', shorthand: 'POL' }, 
    { imgUrl: '/assets/img/flags/sverige-flag.png', code: 'sve', name: 'Svenska', shorthand: 'SVE' },
    { imgUrl: '/assets/img/flags/lietuviu-flag.png', code: 'lie', name: 'Lietuvių', shorthand: 'LIE' }, //lituania
    { imgUrl: '/assets/img/flags/norge-flag.png', code: 'nor', name: 'Norsk', shorthand: 'NOR' },
    { imgUrl: '/assets/img/flags/suomi-flag.png', code: 'suo', name: 'Suomi', shorthand: 'SUO' }, //finlandia
    { imgUrl: '/assets/img/flags/italia-flag.png', code: 'ita', name: 'Italiano', shorthand: 'ITA' }

  ];

  public selectedLanguage = this.languagesList.find(lang => lang.code === this.translocoService.getActiveLang()) || this.languagesList[0];
  public isDropdownOpen = false;

  constructor(public translocoService: TranslocoService) {}

  public toggleDropdown(): void {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  public changeLanguage(language: any): void {
    this.selectedLanguage = language;
    this.translocoService.setActiveLang(language.code);
    this.isDropdownOpen = false;
  }
  public closeDropdown(event: Event): void {
    if (!(event.target as HTMLElement).closest('.language-selector')) {
      this.isDropdownOpen = false;
    }
  }
  ngOnInit(): void {
    document.addEventListener('click', (event) => this.closeDropdown(event));
  }
  ngOnDestroy(): void {
    document.removeEventListener('click', (event) => this.closeDropdown(event));
  }
}
