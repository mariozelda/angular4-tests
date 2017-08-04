import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { DemoAppComponent } from './app.component';
import { FFInfrastructureModule } from '../flex-frame/core/infrastructure/ff-infrastructure.module';

@NgModule({
  declarations: [
    DemoAppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    FFInfrastructureModule
  ],
  providers: [],
  bootstrap: [DemoAppComponent]
})
export class DemoAppModule {}
