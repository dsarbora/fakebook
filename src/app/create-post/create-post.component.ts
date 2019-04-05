import { Component } from '@angular/core';
import { Post } from '../models/post.model';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent{
  createPost(postText: string){
    let post: Post = new Post(postText);
  }
}
