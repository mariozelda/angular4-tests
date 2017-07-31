import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SidenavService } from '../sidenav/';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {
  public user: any;

  /**
   * Constructor of the class.
   *
   * @param {AuthService}         authService
   * @param {ActivatedRoute}      activatedRoute
   * @param {LocalStorageService} localStorage
   * @param {UserService}         userService
   * @param {TranslateService}    translateService
   * @param {SidenavService}      sidenavService
   */
  constructor(
    private activatedRoute: ActivatedRoute,
    private sidenavService: SidenavService
  ) { }

  /**
   * On component init we need to store current user and make a subscription for token changes so that we
   * get user value to update within login / logout states.
   */
  public ngOnInit(): void {
    
  }

  /**
   * Method to toggle application sidenav.
   */
  public toggleSidenav() {
    this.sidenavService
      .toggle()
      .then(() => { });
  }

}
