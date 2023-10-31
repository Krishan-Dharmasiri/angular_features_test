import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GithubDataService } from 'src/app/services/github-data.service';
import { combineLatest, switchMap } from 'rxjs';

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.scss']
})
export class GithubComponent implements OnInit {
  followers : any[] = [];

  user : string | null = '';
  pageNumber : string | null = '-1';
  order : string | null = 'oldest';

  constructor(private _activatedRoute : ActivatedRoute, private _githubDataService : GithubDataService){}

  ngOnInit(): void {
    combineLatest([
      this._activatedRoute.paramMap,
      this._activatedRoute.queryParamMap
    ]).pipe(
      switchMap(combined => {
        this.user = combined[0].get('user');
        this.pageNumber = combined[1].get('page');
        this.order = combined[1].get('order');

        console.log(this.user);
        console.log(this.pageNumber);
        console.log(this.order);

        return this._githubDataService.getAll();
      })      
    )
    .subscribe({
      next : (followers => {
        this.followers = followers;
        console.log(followers);
      })
    })
    
  }

  private getDataFromService_v1(){
    combineLatest([
      this._activatedRoute.paramMap,
      this._activatedRoute.queryParamMap
    ])    
    .subscribe({
      next : (combined) => {
        this.user = combined[0].get('user');
        this.pageNumber = combined[1].get('page');
        this.order = combined[1].get('order');

        console.log(this.user);
        console.log(this.pageNumber);
        console.log(this.order);
      }
    });
    
    this._githubDataService.getAll()
        .subscribe({
          next : (followers => {
            this.followers = followers;
            console.log(followers);
          })
        })
  }

  private getRouteParams(){
    this._activatedRoute.paramMap
            .subscribe({
              next : (params) => {
                this.user = params.get('user');

                console.log(this.user);
              }
            });

    this._activatedRoute.queryParamMap
            .subscribe({
              next : (params) => {
                this.pageNumber = params.get('page');
                this.order = params.get('order');

                console.log(this.pageNumber);
                console.log(this.order);
              }
            });        

  }

}
