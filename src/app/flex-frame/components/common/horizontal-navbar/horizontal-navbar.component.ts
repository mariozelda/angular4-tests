import { Component, OnInit } from '@angular/core';
import { MenuService } from '../menu/menu.service'
import { MenuItemModel } from '../menu/menu.item.model'

@Component({
  selector: 'app-horizontal-navbar',
  templateUrl: './horizontal-navbar.component.html'
})
export class HorizontalNavbarComponent implements OnInit {

  public menuItems: MenuItemModel[] = [];

  constructor(private menuService: MenuService) {
    this.menuItems = this.menuService.getMenu();
  }

  ngOnInit() {
  }

}
