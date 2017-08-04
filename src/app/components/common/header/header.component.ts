import { Component, OnInit, Output, EventEmitter, QueryList, ViewChildren} from '@angular/core';
import { Router } from '@angular/router';
import { MdSidenavToggleResult, ConnectedPositionStrategy, MdMenuTrigger } from '@angular/material';

import { NavbarService } from '../navbar/navbar.service';
import { TranslateService } from 'ng2-translate';

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

  //default state for sidenav
  public isSidenavOpened: boolean = true;

  constructor( private router:Router,
    public navbarService: NavbarService,
    private _translateService: TranslateService) {
  }

  ngOnInit() { }

  /**
   * Method to toggle application sidenav.
   */
  toggleSidenav() {
    this.navbarService.toggle().then(
      (data) => {
        if(data.animationFinished){
          if(data.type == 'close'){
            this.isSidenavOpened = false;
          } else {
            this.isSidenavOpened = true;
          }
        }
      }
    );
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

  onChange(localeId: string): void {
    this._translateService.use(localeId);

    for (let entry of this.languages) {
        if(localeId === entry.value){
          this.defaultLanguage = entry;
        }
    }

  }

}
