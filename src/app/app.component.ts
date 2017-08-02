import {Component, NgModule, VERSION} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'
import { FFDAOMeterReadingService } from './flex-frame/core/infrastructure/services/ff-dao-meter-reading.service';

import { MdButtonModule, MdCardModule, MdIconModule, MdMenuModule, MdToolbarModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/common/header/header.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  menuItems = [
    {
      text: 'John Doe',
      items: [
        {
          text: 'Profile'
        },
        {
          text: 'Settings'
        },
        {
          text: 'Account'
        },
        {
          text: 'Sign Out'
        }
      ]
    }
  ];

  constructor(private meterReadingService: FFDAOMeterReadingService) {
    this.meterReadingService.getMeterReadingResultSet('169013').subscribe(
      (data) => {
        console.log(data);
      }
    );
  }
  title = 'app';
}

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MdToolbarModule,
    MdMenuModule,
    MdButtonModule,
    MdIconModule,
    MdCardModule
  ],
  declarations: [ AppComponent, HeaderComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
