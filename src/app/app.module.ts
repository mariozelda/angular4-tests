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

//Flex Frame Services
import { NavbarService } from './flex-frame/components/common/navbar/navbar.service';
import { MenuService } from './flex-frame/components/common/menu/menu.service';

//Flex Frame Components
import { FFInfrastructureModule } from './flex-frame/core/infrastructure/ff-infrastructure.module';
import { HeaderComponent } from './flex-frame/components/common/header/header.component';
import { NavbarComponent } from './flex-frame/components/common/navbar/navbar.component';
import { HorizontalNavbarComponent } from './flex-frame/components/common/horizontal-navbar/horizontal-navbar.component';
import { MenuItemComponent } from './flex-frame/components/common/menu/menu.item.component';
import { HorizontalMenuItemComponent } from './flex-frame/components/common/menu/horizontal-menu/horizontal.menu.item.component';
import { FooterComponent } from './flex-frame/components/common/footer/footer.component';

//Components
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    HorizontalNavbarComponent,
    MenuItemComponent,
    HorizontalMenuItemComponent,
    FooterComponent,
    HomeComponent
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
