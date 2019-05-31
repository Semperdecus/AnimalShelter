import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

@Injectable()
export class DogHotelService {
  private BASE_URL = 'http://localhost:8762/doghotel/';

  constructor(private http: HttpClient) {
  }

  getPort() {
    return this.http.get<any>(this.BASE_URL);
  }
}
