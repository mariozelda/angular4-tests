import {Component, Inject} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'
import { FFDAOMeterReadingService } from './flex-frame/core/infrastructure/services/ff-dao-meter-reading.service';

import {TranslateService} from 'ng2-translate';
//import {BROWSER_LANGUAGE} from '../../constants/all'; --> Browser_Language

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private _translateService: TranslateService, private meterReadingService: FFDAOMeterReadingService, @Inject("Browser_Language") private _browserLocale: string) {

    this.meterReadingService.getMeterReadingResultSet('169013').subscribe(
      (data) => {
        console.log(data);
      }
    );
  }

  title = 'app';

  public ngOnInit(): void {
    this._translateService.addLangs(['en-US', 'de-DE', 'fr-FR']);
    this._translateService.setDefaultLang('en-US');
    // this._translateService.use(this._browserLocale);
    this._translateService.use("de-DE");
  }
}
