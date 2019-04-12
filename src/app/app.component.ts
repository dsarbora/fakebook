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
  masterProfileList: Profile[]= [
      {firstName: "Sandy", lastName: "Kofax", email: "skofax@fakebook.com", password: "artist2"},
      {firstName: "Tom", lastName: "Jerry", email: "tj@fakebook.com", password: "catandmouse"},
      {firstName: "Rachel", lastName: "Greenwood", email: "rgw@fakebook.com", password: "greenwoody"}
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

  createProfile(profile: Profile){
    this.masterProfileList.push(profile);
    console.log(this.masterProfileList);
  }
}
