import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {TranslateModule} from 'ng2-translate';

let language = navigator.language || navigator['userLanguage'];


//Routes
import { APP_ROUTING } from './app.routes';

//Services
import { NavbarService } from './components/common/navbar/navbar.service';
import { MenuService } from './components/common/menu/menu.service';

//Components
import { AppComponent } from './app.component';
import { FFInfrastructureModule } from './flex-frame/core/infrastructure/ff-infrastructure.module';
import { HeaderComponent } from './components/common/header/header.component';
import { NavbarComponent } from './components/common/navbar/navbar.component';
import { HorizontalNavbarComponent } from './components/common/horizontal-navbar/horizontal-navbar.component';
import { HomeComponent } from './components/home/home.component';
import { MenuItemComponent } from './components/common/menu/menu.item.component';
import { FooterComponent } from './components/common/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    HorizontalNavbarComponent,
    HomeComponent,
    MenuItemComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    FFInfrastructureModule,
    MaterialModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    APP_ROUTING,
    TranslateModule.forRoot()
  ],
  providers: [
    NavbarService,
    MenuService,
    { provide: "Browser_Language", useValue: language }
  ],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
