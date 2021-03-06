import { Component, OnInit } from '@angular/core';
import { Profile } from './models/profile.model';
import { Post } from './models/post.model';
import { ProfileService } from './profile.service';
import { PostService } from './post.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [
    ProfileService,
    PostService
  ]
})
export class AppComponent implements OnInit{

  constructor(private profileService: ProfileService, private postService: PostService){}

  title = 'fakebook';
  loggedIn=false;
  user;
  profiles: FirebaseListObservable<any[]>;

  posts: FirebaseListObservable<any[]>;

  login(loginInfo){    
    let profileList: any[] = [];
    this.profiles.subscribe(snapshot => {
      snapshot.forEach(profile =>{
      profileList.push(profile)
      });
    });
    for(var i=0; i<profileList.length; i++){
      if(profileList[i].email==loginInfo[0]&&profileList[i].password==loginInfo[1]){
        this.loggedIn=true;
        this.user = profileList[i];
        console.log(this.user);
        return;
      }
    }
    alert("Incorrect username/password combination");
  }

  createPost(arr){
    if(arr[0]){
      let post: Post = new Post(arr[0], this.user);
      this.postService.createPost(post);
    }
  }

  createProfile(profile: Profile){
    this.profiles.push(profile);
    console.log(this.profiles);
  }

  ngOnInit(){
    this.profiles = this.profileService.getProfiles();
    console.log(this.profiles);
    this.posts = this.postService.getPosts();
  }
}
