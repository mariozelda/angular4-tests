import { Component, OnInit, Output, EventEmitter, Input, QueryList, ViewChildren} from '@angular/core';
import { Router } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
import { ConnectedPositionStrategy, MdMenuTrigger } from '@angular/material';

import {TranslateService} from 'ng2-translate';

let originWithFallbackPosition = ConnectedPositionStrategy.prototype.withFallbackPosition;
ConnectedPositionStrategy.prototype.withFallbackPosition = function (originPos, overlayPos) {
  overlayPos.overlayX = 'start';
  if(this._preferredPositions.length) {
    return this;
  }
  return originWithFallbackPosition.apply(this, arguments);
};

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

  // @Input() items: any[];

  @ViewChildren(MdMenuTrigger) triggers: QueryList<MdMenuTrigger>;

  @Output() navToggle = new EventEmitter<boolean>();
  isOpened = false;

  menuItems:any = [
    {
      items: [
        {
          text: 'Profile'
        },
        {
          text: 'Settings'
        },
        {
          text: 'Account'
        },
        {
          text: 'Sign Out'
        }
      ]
    }
  ];

  languages = [
    { text:'DE', value:'de-DE' },
    { text:'EN', value:'en-US' },
    { text:'FR', value:'fr-FR' }
  ];

  defaultLanguage = this.languages[0];

  constructor(private router:Router, private _translateService: TranslateService) {
  }

  ngOnInit() {
  }

  /**
   * Method to toggle application sidenav.
   */
  toggleSidenav() {
    this.isOpened = !this.isOpened;
    this.navToggle.emit(true);
  }

  openMenu(trigger: MdMenuTrigger, level: number) {
    this.triggers
      .filter((x: any) => x._element.nativeElement.dataset.level >= level && x !== trigger)
      .forEach(x => x.closeMenu());
    trigger.openMenu();
  }

  closeMenu() {
    this.triggers.forEach(x => x.closeMenu());
  }

  changeLanguage() {
      // console.log("Change language!");
      this.triggers.forEach(x => x.closeMenu());
  }

  onChange(localeId: string): void {
    debugger;
    this._translateService.use(localeId);
  }

}
