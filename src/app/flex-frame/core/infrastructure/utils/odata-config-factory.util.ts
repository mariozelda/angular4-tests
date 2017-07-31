import { ODataConfiguration } from 'angular2-odata';
import { Response } from '@angular/http';

export function oDataConfigFactory() {
  const odata = new ODataConfiguration();
  odata.extractQueryResultData = function<T>(res: Response): T[] {
    if (res.status < 200 || res.status >= 300) {
      throw new Error('Bad response status: ' + res.status);
    }
    let body = res.json();
    console.log(body.d.results);
    return body;
  };
  odata.baseUrl = '/etility/services';
  return odata;
}
