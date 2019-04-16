import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Post } from './models/post.model';

@Injectable()
export class PostService {
  posts: FirebaseListObservable<any[]>

  constructor(private database: AngularFireDatabase) {
    this.posts = database.list("posts");
   }

   getPosts(){
     return this.posts;
   }

   getPostById(){
     
   }

   createPost(newPost: Post){
     this.posts.push(newPost);
   }

}
