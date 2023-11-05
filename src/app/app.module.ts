import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialComponentsModule } from './material-components/material-components.module';

import { AppComponent } from './app.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { SignupFormComponent } from './components/signup-form/signup-form.component';
import { ChangepasswordFormComponent } from './components/changepassword-form/changepassword-form.component';
import { PostsComponent } from './components/posts/posts.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { GithubProfileComponent } from './components/github-profile/github-profile.component';
import { GithubComponent } from './components/github/github.component';
import { LoginComponent } from './components/login/login.component';
import { AdminComponent } from './components/admin/admin.component';
import { MaterialTestComponent } from './components/material-test/material-test.component';
import { EditCourseComponent } from './components/edit-course/edit-course.component';


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
    GithubProfileComponent,
    GithubComponent,
    LoginComponent,
    AdminComponent,
    MaterialTestComponent,
    EditCourseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    HttpClientModule,
    BrowserAnimationsModule,

    MaterialComponentsModule,    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
