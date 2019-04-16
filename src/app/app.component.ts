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
  user: Profile;
  profiles: FirebaseListObservable<any[]>;

  masterPostList: Post[] = [];

  login(loginInfo){
    console.log("Logging in");
    let count=0;
    this.profiles.forEach(function(profile){
      count++;
    })
    for(let i=0; i<count; i++){
      if(this.profiles[i].email==loginInfo[0]&&this.profiles[i].password==loginInfo[1]){
        this.loggedIn=true;
        return;
      }
    }
    alert("Incorrect username/password combination");
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
