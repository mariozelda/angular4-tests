import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import {BrowserModule} from '@angular/platform-browser'
import { MdSidenav } from '@angular/material';

import { MenuItemModel } from './flex-frame/components/common/menu/menu.item.model';

import {TranslateService} from 'ng2-translate';
import { NavbarService } from './flex-frame/components/common/navbar/navbar.service';
import { MenuService } from './flex-frame/components/common/menu/menu.service';
import { FFDAOMeterReadingService } from './flex-frame/core/infrastructure/services/ff-dao-meter-reading.service';

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
  horizontalNav: boolean = false;

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

    let menuItem1: MenuItemModel = new MenuItemModel('Menu 1');
    menuItem1.label = 'menuItem1.label';
    menuItems.push(menuItem1);

    let menuChilds: MenuItemModel[] = [];

    let menuItem2_1: MenuItemModel = new MenuItemModel('Menu 2 1');
    menuItem2_1.label = 'menuItem2_1.label';
    menuChilds.push(menuItem2_1);

    let menuItem2_2: MenuItemModel = new MenuItemModel('Menu 2 2');
    menuItem2_2.label = 'menuItem2_2.label';
    menuChilds.push(menuItem2_2);

    let menuItem2_3: MenuItemModel = new MenuItemModel('Menu 2 3');
    menuItem2_3.label = 'menuItem2_3.label';
    menuChilds.push(menuItem2_3);

    let menuItem2: MenuItemModel = new MenuItemModel('Menu 2', menuChilds);
    menuItem2.label = 'menuItem2.label';
    menuItems.push(menuItem2);

    let menuItem3: MenuItemModel = new MenuItemModel('Menu 3');
    menuItem3.label = 'menuItem3.label';
    menuItems.push(menuItem3);

    let menuChilds_4: MenuItemModel[] = [];

    let menuItem4_1: MenuItemModel = new MenuItemModel('Menu 4 1');
    menuItem4_1.label = 'menuItem4_1.label';
    menuChilds_4.push(menuItem4_1);

    let menuItem4_2: MenuItemModel = new MenuItemModel('Menu 4 2');
    menuItem4_2.label = 'menuItem4_2.label';
    menuChilds_4.push(menuItem4_2);

    let menuItem4_3: MenuItemModel = new MenuItemModel('Menu 4 3');
    menuItem4_3.label = 'menuItem4_3.label';
    menuChilds_4.push(menuItem4_3);

    let menuItem4: MenuItemModel = new MenuItemModel('Menu 4', menuChilds_4);
    menuItem4.label = 'menuItem4.label';
    menuItems.push(menuItem4);

    this.menuService.initMenu(menuItems);
  }
}
