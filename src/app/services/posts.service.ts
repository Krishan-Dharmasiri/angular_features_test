import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DataService } from './data.service';


@Injectable({
  providedIn: 'root'
})
export class PostsService extends DataService {
 
  constructor(http : HttpClient) { 
    super('https://localhost:7191/api/Posts', http)
  }
}
