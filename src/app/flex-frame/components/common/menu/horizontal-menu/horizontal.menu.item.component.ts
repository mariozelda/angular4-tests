import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItemModel } from '../menu.item.model';

import { TranslateService } from 'ng2-translate';

@Component({
  selector: 'horizontal-menu-item',
  templateUrl: './horizontal.menu.item.component.html'
})
export class HorizontalMenuItemComponent {
  @Input() menuItem: MenuItemModel;

  constructor(
    private router: Router,
    private _translateService: TranslateService
  ){}

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
