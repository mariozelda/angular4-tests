import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FFInfrastructureModule } from '../flex-frame/core/infrastructure/ff-infrastructure.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    FFInfrastructureModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
