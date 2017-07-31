import { Injectable } from '@angular/core';
import { ODataService, ODataServiceFactory } from 'angular2-odata';

@Injectable()
export class FFDAOMeterReadingService {
  private odata: ODataService<ZIPK_ETILITY_CORE.MeterReadingResultSet>;

  constructor(odataFactory: ODataServiceFactory) {
    this.odata = odataFactory.CreateService<ZIPK_ETILITY_CORE.MeterReadingResultSet>('MeterReadingResultSet');
  }

  public getMeterReadingResultSet(premiseID: string) {
    return this.odata.Query().Filter('(PremiseID eq \'' + premiseID + '\')').Exec();
  }

}
