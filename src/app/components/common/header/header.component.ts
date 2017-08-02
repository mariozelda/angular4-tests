import { Component, OnInit, Output, EventEmitter, Input, QueryList, ViewChildren} from '@angular/core';
import { Router } from '@angular/router';
import { MdSidenavToggleResult } from '@angular/material';
import { NavbarService } from '../navbar/navbar.service';
import { ConnectedPositionStrategy, MdMenuTrigger } from '@angular/material';

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
    { text:'DE' },
    { text:'EN' },
    { text:'FR' }
  ];

  defaultLanguage = this.languages[0];

  //default state for sidenav
  public isSidenavOpened: boolean = true;

  constructor( private router:Router,
    public navbarService: NavbarService) {
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

  changeLanguage() {
      // console.log("Change language!");
      this.triggers.forEach(x => x.closeMenu());
  }

}
