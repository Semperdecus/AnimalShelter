import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {SidebarComponent} from './components/sidebar/sidebar.component';
import {DashboardComponent} from './pages/dashboard/dashboard.component';
import {SidebarModule} from 'ng-sidebar';
import {MatIconModule} from '@angular/material/icon';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AuthService, CatService, DogGalleryService, DogHotelService} from './services';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {LoginComponent} from './pages/login/login.component';
import {DogsComponent} from './pages/dogs/dogs.component';
import {DogComponent} from './components/dog/dog.component';
import {DoghotelComponent} from './pages/doghotel/doghotel.component';
import {CatsComponent} from './pages/cats/cats.component';
import {AuthInterceptor} from './guards/auth.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    DashboardComponent,
    LoginComponent,
    DogsComponent,
    DogComponent,
    DoghotelComponent,
    CatsComponent,
  ],
  imports: [
    NgbModule,
    BrowserModule,
    AppRoutingModule,
    SidebarModule,
    MatIconModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true},
    AuthService,
    DogGalleryService,
    DogHotelService,
    CatService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
