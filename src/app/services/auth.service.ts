import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Router} from '@angular/router';

@Injectable()
export class AuthService {

  constructor(private http: HttpClient, private router: Router) {
  }

  public static isLoggedIn() {
    const user = localStorage.getItem('currentUser');
    if (user != null) {
      return true;
    }
  }

  static logout() {
    localStorage.removeItem('currentUser');
    localStorage.removeItem('token');
  }

  login(username: string, password: string) {
    return this.http.post<any>(
      'http://localhost:8762/auth',
      {username, password}, {observe: 'response'}).subscribe(
      (res) => {
        localStorage.setItem('currentUser', username);
        localStorage.setItem('token', res.headers.get('Authorization'));
        this.router.navigateByUrl('/dashboard');
      }
    );
  }

  ping() {
    // Requires following micro services: Auth, Eureka, Zuul, Common
    console.log('Expecting status code 401');
    return this.http.post<any>('http://localhost:8762/auth', {});
  }
}
