import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-horizontal-navbar',
  templateUrl: './horizontal-navbar.component.html'
})
export class HorizontalNavbarComponent implements OnInit {

  constructor( private router:Router) { }

  ngOnInit() {
  }

}
