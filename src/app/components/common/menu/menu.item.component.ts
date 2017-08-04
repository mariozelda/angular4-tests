import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Router } from '@angular/router';

import { MenuItemModel } from './menu.item.model';

@Component({
  selector: 'menu-item',
  templateUrl: './menu.item.component.html'
})
export class MenuItemComponent {
  @Input() menuItem: MenuItemModel;

  @Input() horizontal: boolean = false;

  constructor(private router: Router){}

  menuAction(){
    if(!this.menuItem.isParent()){
      if(this.menuItem.state != undefined && this.menuItem.state != ''){
        this.router.navigate([this.menuItem.state]);
      } else if(this.menuItem.uri != undefined && this.menuItem.uri != ''){
        //TODO: Navigate to a externar URI, future feature.
      } else {
        console.warn('Menu entry without action');
      }
    }
  }

}
