import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
  // ,
  // template: '<app-navbar (click)="mainNav.toggleSidenav()"></app-navbar>',

})
export class HeaderComponent implements OnInit {

  @Output() navToggle = new EventEmitter<boolean>();
  isOpened = false;

  constructor( private router:Router) {

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


}
