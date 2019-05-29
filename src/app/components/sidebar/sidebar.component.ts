import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../_services/auth.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  private opened = true;
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
    this.loggedIn = AuthService.isLoggedIn();
  }

  login() {
    const val = this.loginForm.value;
    if (val.username && val.password) {
      this.authService.login(val.username, val.password);
    }
  }

  private _toggleSidebar() {
    this.opened = !this.opened;
  }

  private logOut() {
    AuthService.logout();
  }
}
