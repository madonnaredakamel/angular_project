import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { StartbarComponent } from './component/startbar/startbar.component';
import { HomeComponent } from './pages/home/home.component';
import { SliderComponent } from './component/slider/slider.component';
import { FooterComponent } from './components/footer/footer.component';
import { UpbtnComponent } from './component/upbtn/upbtn.component';
import { DonationsComponent } from './pages/donations/donations.component';
import { RegisterComponent } from './page/register/register.component';
import { LoginComponent } from './page/login/login.component';
import { InterceptorInterceptor } from './provider/interceptor.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    StartbarComponent,
    HomeComponent,
    SliderComponent,
    FooterComponent,
    UpbtnComponent,
    DonationsComponent,
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorInterceptor,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
