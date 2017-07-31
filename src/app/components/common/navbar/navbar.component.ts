import { Component, OnInit, ViewChild } from '@angular/core';
import { MdSidenav } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

  @ViewChild('mainNav') mainNav:MdSidenav;

  constructor( private router:Router) { }

  ngOnInit(){
  }

  /**
   * Method to toggle application sidenav.
   */
  toggleSidenav() {
    this.mainNav.toggle()
  }

}
