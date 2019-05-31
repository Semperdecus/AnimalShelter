import {Component, Input, OnInit} from '@angular/core';
import {Dog} from '../../models/dog';

@Component({
  selector: 'app-dog',
  templateUrl: './dog.component.html',
  styleUrls: ['./dog.component.scss']
})
export class DogComponent implements OnInit {
  @Input() dogResults: Dog[];

  constructor() { }

  ngOnInit() {
  }

}
