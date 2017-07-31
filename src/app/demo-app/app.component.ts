import { Component } from '@angular/core';
import { FFDAOMeterReadingService } from '../flex-frame/core/infrastructure/services/ff-dao-meter-reading.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private meterReadingService: FFDAOMeterReadingService) {
    this.meterReadingService.getMeterReadingResultSet('169013').subscribe(
      (data) => {
        console.log(data);
      }
    );
  }
  title = 'app';
}
