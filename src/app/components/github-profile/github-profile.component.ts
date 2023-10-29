import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-github-profile',
  templateUrl: './github-profile.component.html',
  styleUrls: ['./github-profile.component.scss']
})
export class GithubProfileComponent implements OnInit {
  constructor(private _activatedRoute : ActivatedRoute, private _router : Router){

  }

  ngOnInit(): void {
    this._activatedRoute.paramMap
        .subscribe({
          next : (params => {
            let id = params.get('id');
            console.log(id);
          })
        })
  }

  submit(){
    this._router.navigate(['/followers', 'kmd'], {
      queryParams : {page : 1, order : 'oldest'}
    })
  }

}
