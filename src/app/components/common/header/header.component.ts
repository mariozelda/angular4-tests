import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MdSidenavToggleResult } from '@angular/material';
import { NavbarService } from '../navbar/navbar.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
  // ,
  // template: '<app-navbar (click)="mainNav.toggleSidenav()"></app-navbar>',

})
export class HeaderComponent implements OnInit {

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

}
