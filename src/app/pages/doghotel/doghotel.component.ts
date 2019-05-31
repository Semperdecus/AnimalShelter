import {Component, OnInit} from '@angular/core';
import {DogHotelService} from '../../services';

@Component({
  selector: 'app-doghotel',
  templateUrl: './doghotel.component.html',
  styleUrls: ['./doghotel.component.scss']
})
export class DoghotelComponent implements OnInit {
  private offline: boolean;
  private port: string;

  constructor(private doghotelService: DogHotelService) {
  }

  ngOnInit() {
    this.getDogs();
  }

  getDogs() {
    this.doghotelService.getPort().subscribe(
      (data) => {
        this.port = data;
      },
      () => {
        this.offline = true;
      }
    );
  }
}
