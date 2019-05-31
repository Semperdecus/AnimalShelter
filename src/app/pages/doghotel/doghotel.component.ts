import { Component, OnInit } from '@angular/core';
import {Dog} from '../../models/dog';
import {DogGalleryService, DogHotelService} from '../../services';

@Component({
  selector: 'app-doghotel',
  templateUrl: './doghotel.component.html',
  styleUrls: ['./doghotel.component.scss']
})
export class DoghotelComponent implements OnInit {
  public offline: boolean;
  private port: string;
  constructor(private doghotelService: DogHotelService) { }

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
