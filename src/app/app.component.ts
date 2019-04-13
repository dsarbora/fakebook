import { Component, OnInit } from '@angular/core';
import { Profile } from './models/profile.model';
import { Post } from './models/post.model';
import { ProfileService } from './profile.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ProfileService]
})
export class AppComponent implements OnInit{

  constructor(private profileService: ProfileService){}

  title = 'fakebook';
  loggedIn=false;
  user;
  profiles: FirebaseListObservable<any[]>;

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
    this.profiles.push(profile);
    console.log(this.profiles);
  }

  ngOnInit(){
    this.profiles = this.profileService.getProfiles();
  }
}
