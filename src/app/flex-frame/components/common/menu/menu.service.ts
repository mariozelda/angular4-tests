import { Injectable } from '@angular/core';

import { MenuItemModel } from './menu.item.model';

@Injectable()
export class MenuService {
  private menuItems: MenuItemModel[];

  public initMenu(menuItems: MenuItemModel[]): void{
    this.menuItems = menuItems;
  }

  public getMenu(){
    return this.menuItems;
  }

}
