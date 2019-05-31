import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

@Injectable()
export class CatService {
  private BASE_URL = 'http://localhost:8762/cat/';

  constructor(private http: HttpClient) {
  }

  getRandomCat() {
    return this.http.get<any>(this.BASE_URL + 'randomCat');
  }

  toggleRandomCatService() {
    return this.http.get<any>(this.BASE_URL + 'admin/toggleRandomCat');
  }
}
