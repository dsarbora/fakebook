import { Component } from '@angular/core';
import { Profile } from './models/profile.model';
import { Post } from './models/post.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'fakebook';
  loggedIn=false;
  user;
  masterProfilesList: Profile[]= [
      {firstName: "Sandy", lastName: "Kofax"},
      {firstName: "Tom", lastName: "Jerry"},
      {firstName: "Rachel", lastName: "Greenwood" }
  ];

  masterPostList: Post[] = [];

  login(bool){
    console.log("Logging in");
    this.loggedIn=bool;
  }

  createPost(arr){
    let post: Post = new Post(arr[0]);//, creator);
    this.masterPostList.unshift(post);
  }
}
