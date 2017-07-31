import { NgModule } from '@angular/core';
import { FFDAOMeterReadingService } from './services/ff-dao-meter-reading.service';
import { ODataConfiguration, ODataServiceFactory } from 'angular2-odata';
import { oDataConfigFactory } from './utils/odata-config-factory.util';

@NgModule({
  providers: [
    {provide: ODataConfiguration, useFactory: oDataConfigFactory},
    ODataServiceFactory,
    FFDAOMeterReadingService
  ]
})
export class FFInfrastructureModule { }
