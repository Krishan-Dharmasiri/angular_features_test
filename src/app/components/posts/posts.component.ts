import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  url : string = 'http://jsonplaceholder.typicode.com/posts';
  posts : any[] = [];
  constructor(private _http : HttpClient){
    
  }

  ngOnInit(): void {
    this._http.get(this.url)
        .subscribe((response) => {
          this.posts = response as any[];          
        });
  }

  createPost(newPostTitle : string){
    let newPost : any = {
      title : newPostTitle
    }
    this._http.post(this.url, JSON.stringify(newPost))
        .subscribe((response : any) => {
          newPost.id  = response.id;
          this.posts.splice(0,0,newPost);
        });
  }

}
