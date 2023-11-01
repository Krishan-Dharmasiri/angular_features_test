import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PostsComponent } from './components/posts/posts.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { GithubProfileComponent } from './components/github-profile/github-profile.component';
import { GithubComponent } from './components/github/github.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {path : '', component : LoginComponent},
  {path : 'login', component : LoginComponent},
  {path : 'home', component : HomeComponent},
  {path : 'posts', component : PostsComponent},
  {path : 'followers/:id/:username', component : GithubProfileComponent},
  {path : 'followers/:user', component : GithubComponent},
  {path : '**', component : NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
