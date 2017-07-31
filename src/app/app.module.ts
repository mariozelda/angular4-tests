import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Routes
import { APP_ROUTING } from './app.routes';

//Services
import { SidenavService } from './layout/sidenav/sidenav.service';

//Components
import { AppComponent } from './app.component';
import { FFInfrastructureModule } from './flex-frame/core/infrastructure/ff-infrastructure.module';
import { HeaderComponent } from './components/common/header/header.component';
import { NavbarComponent } from './components/common/navbar/navbar.component';
import { HorizontalNavbarComponent } from './components/common/horizontal-navbar/horizontal-navbar.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    HorizontalNavbarComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    FFInfrastructureModule,
    MaterialModule,
    BrowserAnimationsModule,
    APP_ROUTING
  ],
  providers: [
    SidenavService
  ],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
