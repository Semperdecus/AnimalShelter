import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {DogGallery} from '../models/dogGallery';

@Injectable()
export class DogGalleryService {
  private BASE_URL = 'http://localhost:8762/dogGallery/';

  constructor(private http: HttpClient) {
  }

  getById(id) {
    return this.http.get<DogGallery>(this.BASE_URL + id);
  }
}
