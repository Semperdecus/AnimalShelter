import { Component, OnInit } from '@angular/core';
import {DogGalleryService} from '../../services';
import {Dog} from '../../models/dog';

@Component({
  selector: 'app-dogs',
  templateUrl: './dogs.component.html',
  styleUrls: ['./dogs.component.scss']
})
export class DogsComponent implements OnInit {
  public dogs: Dog[] = [];
  public offline: boolean;
  constructor(private dogService: DogGalleryService) { }

  ngOnInit() {
    this.getDogs();
  }

  getDogs() {
    this.dogService.getById(1).subscribe(
      (data) => {
        this.dogs = data.dogs;
      },
      (error) => {
        this.offline = true;
        console.log(error);
      }
    );
  }
}
