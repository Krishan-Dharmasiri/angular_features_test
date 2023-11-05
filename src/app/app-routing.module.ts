import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PostsComponent } from './components/posts/posts.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { GithubProfileComponent } from './components/github-profile/github-profile.component';
import { GithubComponent } from './components/github/github.component';
import { LoginComponent } from './components/login/login.component';
import { AdminComponent } from './components/admin/admin.component';
import { AuthGuard } from './services/auth-guard.service';
import { MaterialTestComponent } from './components/material-test/material-test.component';

const routes: Routes = [
  {path : '', component : MaterialTestComponent},
  {path : 'login', component : LoginComponent},
  {path : 'home', component : HomeComponent},
  {path : 'admin', component : AdminComponent, canActivate : [AuthGuard]},
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
