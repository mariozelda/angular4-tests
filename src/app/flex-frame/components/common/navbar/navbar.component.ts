import { Component, OnInit } from '@angular/core';
import { MenuService } from '../menu/menu.service'
import { MenuItemModel } from '../menu/menu.item.model'


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

  public menuItems: MenuItemModel[] = [];

  constructor(private menuService: MenuService) {
    this.menuItems = this.menuService.getMenu();
  }

  public ngOnInit(): void {
  }

}
