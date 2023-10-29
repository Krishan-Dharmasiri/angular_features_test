import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { SignupFormComponent } from './components/signup-form/signup-form.component';
import { ChangepasswordFormComponent } from './components/changepassword-form/changepassword-form.component';
import { PostsComponent } from './components/posts/posts.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { GithubProfileComponent } from './components/github-profile/github-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactFormComponent,
    SignupFormComponent,
    ChangepasswordFormComponent,
    PostsComponent,
    NavbarComponent,
    HomeComponent,
    NotfoundComponent,
    GithubProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    HttpClientModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
