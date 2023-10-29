import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  
  posts : any[] = [];
  constructor(private _postsService : PostsService){
    
  }

  ngOnInit(): void {
    this._postsService.getAll()
        .subscribe((posts) => {
          this.posts = posts;                   
        });
  }

  createPost(newPostInputControl : HTMLInputElement){
    let newPost : any = {
      title : newPostInputControl.value
    }
    this._postsService.create(newPost)
        .subscribe({
          next : (response : any) => {
            newPost.id  = response.id;
            this.posts.splice(0,0,newPost);
          },
          error : (error : Response) => {
            if(error.status === 400){
              // this.form.setErrors() // set the error in the form so user sees it
              alert('One or more input not valid')
            }
            else{
              alert('An unexpected error occured.');
              console.log(error);
            }            
          }
        });

    newPostInputControl.value = '';    
  }

  deletePost(post : any){
    this._postsService.delete(post.id)
    .subscribe({
      next : (response)=> {
        let index = this.posts.indexOf(post);
        this.posts.splice(index,1);
      }, 
      error : (error : Response) => {
        if(error.status === 404)
          alert('This post does not exist or alredy deleted.')
        else{
          alert('An unexpected error occurred.');
          console.log(error);
        }        
      }
    })
  };

}
