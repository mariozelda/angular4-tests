import { Component, OnInit, ViewChild, Inject } from '@angular/core';

import {BrowserModule} from '@angular/platform-browser'

import { MdSidenav } from '@angular/material';

import {TranslateService} from 'ng2-translate';

import { NavbarService } from './components/common/navbar/navbar.service';

import { MenuService } from './components/common/menu/menu.service';

import { FFDAOMeterReadingService } from './flex-frame/core/infrastructure/services/ff-dao-meter-reading.service';

import { MenuItemModel } from './Components/common/menu/menu.item.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  @ViewChild('mainNav') set content(content: MdSidenav) {
    console.log('content ->' + content);
    if(content == undefined){
      this.navbarService.setSidenavDisabled();
    } else {
      this.navbarService.setSidenav(content);
    }
  }

  title = 'app';
  //TODO: set value from config file | true: navigation horizontal
  horizontalNav: boolean = true;

  constructor(private meterReadingService: FFDAOMeterReadingService,
    private _translateService: TranslateService,
    @Inject("Browser_Language") private _browserLocale: string,
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

  public ngOnInit(): void {
    this._translateService.addLangs(['en-US', 'de-DE', 'fr-FR']);
    this._translateService.setDefaultLang('en-US');
    // this._translateService.use(this._browserLocale);
    this._translateService.use("de-DE");
  }

  private loadMenu(){
    //TODO get Menu info from somewhere...
    let menuItems: MenuItemModel[] = [];

    let menutItem1: MenuItemModel = new MenuItemModel('Menu 1');
    menuItems.push(menutItem1);

    let menuChilds: MenuItemModel[] = [];

    let menutItem2_1: MenuItemModel = new MenuItemModel('Menu 2 1');
    menuChilds.push(menutItem2_1);

    let menutItem2_2: MenuItemModel = new MenuItemModel('Menu 2 2');
    menuChilds.push(menutItem2_1);

    let menutItem2_3: MenuItemModel = new MenuItemModel('Menu 2 3');
    menuChilds.push(menutItem2_1);

    let menutItem2: MenuItemModel = new MenuItemModel('Menu 2', menuChilds);
    menuItems.push(menutItem2);

    let menutItem3: MenuItemModel = new MenuItemModel('Menu 3');
    menuItems.push(menutItem3);

    let menuChilds_4: MenuItemModel[] = [];

    let menutItem4_1: MenuItemModel = new MenuItemModel('Menu 4 1');
    menuChilds_4.push(menutItem4_1);

    let menutItem4_2: MenuItemModel = new MenuItemModel('Menu 4 2');
    menuChilds_4.push(menutItem4_1);

    let menutItem4_3: MenuItemModel = new MenuItemModel('Menu 4 3');
    menuChilds_4.push(menutItem4_1);

    let menutItem4: MenuItemModel = new MenuItemModel('Menu 4', menuChilds_4);
    menuItems.push(menutItem4);

    this.menuService.initMenu(menuItems);
  }
}
