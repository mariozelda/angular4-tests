import { Component, OnInit, ViewChild } from '@angular/core';

import { MdSidenav } from '@angular/material';

import { NavbarService } from './components/common/navbar/navbar.service';

import { MenuService } from './components/common/menu/menu.service';

import { FFDAOMeterReadingService } from './flex-frame/core/infrastructure/services/ff-dao-meter-reading.service';

// import { MenuNavService } from './Components/common/menu/menu.nav.service';
import { MenuItem } from './Components/common/menu/menu.item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

   @ViewChild('mainNav') set content(content: MdSidenav) {
      if(content == undefined){
        this.navbarService.setSidenavDisabled();
      } else {
        this.navbarService.setSidenav(content);
      }
   }


  constructor(private meterReadingService: FFDAOMeterReadingService,
    private navbarService: NavbarService,
    private menuService: MenuService
  ){
    // this.meterReadingService.getMeterReadingResultSet('169013').subscribe(
    //   (data) => {
    //     console.log(data);
    //   }
    // );
    this.loadMenu();
  }
  title = 'app';

  private loadMenu(){
    //TODO get Menu info from somewhere...
    let menuItems: MenuItem[] = [];

    let menutItem1: MenuItem = new MenuItem('Menu 1');
    menuItems.push(menutItem1);

    let menuChilds: MenuItem[] = [];

    let menutItem2_1: MenuItem = new MenuItem('Menu 2 1');
    menuChilds.push(menutItem2_1);

    let menutItem2_2: MenuItem = new MenuItem('Menu 2 2');
    menuChilds.push(menutItem2_1);

    let menutItem2_3: MenuItem = new MenuItem('Menu 2 3');
    menuChilds.push(menutItem2_1);

    let menutItem2: MenuItem = new MenuItem('Menu 2', menuChilds);
    menuItems.push(menutItem2);

    let menutItem3: MenuItem = new MenuItem('Menu 3');
    menuItems.push(menutItem3);

    this.menuService.initMenu(menuItems);
  }

  //TODO: set value from config file | true: navigation horizontal
  horizontalNav: boolean = false;

  public ngOnInit(): void {
    // Store sidenav to service
  }
}
