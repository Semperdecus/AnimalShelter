import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../_services';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import '../../../assets/login.js';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  private loggedIn = false;
  loginForm: FormGroup;
  constructor(private fb: FormBuilder,
              private authService: AuthService) {
    this.loginForm = this.fb.group({
      loginForm: ['', Validators.required],
      password: ['', Validators.required],
      username: ['', Validators.required]
    });
  }
  ngOnInit() {
    (window as any).initialize();
    this.loggedIn = AuthService.isLoggedIn();
    console.log(this.loggedIn);
  }

  login() {
    console.log('logging');
    const val = this.loginForm.value;
    if (val.username && val.password) {
      this.authService.login(val.username, val.password);
    }
  }
}
