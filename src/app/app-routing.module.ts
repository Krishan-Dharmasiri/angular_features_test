import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PostsComponent } from './components/posts/posts.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { GithubProfileComponent } from './components/github-profile/github-profile.component';

const routes: Routes = [
  {path : '', component : HomeComponent},
  {path : 'home', component : HomeComponent},
  {path : 'posts', component : PostsComponent},
  {path : 'profile/:username', component : GithubProfileComponent},
  {path : '**', component : NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
