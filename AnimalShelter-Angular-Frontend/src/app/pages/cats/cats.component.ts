import {Component, OnInit} from '@angular/core';
import {CatService} from '../../services';

@Component({
  selector: 'app-cats',
  templateUrl: './cats.component.html',
  styleUrls: ['./cats.component.scss']
})
export class CatsComponent implements OnInit {
  private randomCat: string;
  private offline: boolean;
  private enabled: boolean;
  private unauthorized: boolean;

  constructor(private catService: CatService) {
  }

  ngOnInit() {
    this.randomCat = 'https://cataas.com/cat/says/Click%20here%20to%20make%20a%20cat!';
    this.unauthorized = false;
  }

  getRandomCat() {
    this.catService.getRandomCat().subscribe(
      (data) => {
        this.randomCat = data;
      },
      () => {
        this.offline = true;
      }
    );
  }

  toggleRandomCatService() {
    this.catService.toggleRandomCatService().subscribe(
      (data) => {
        this.enabled = data;
      },
      (err) => {
        this.unauthorized = true;
        console.log(err);
      }
    );
  }
}
