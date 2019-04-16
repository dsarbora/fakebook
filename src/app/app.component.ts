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
    console.log(this.user);
    let post: Post = new Post(arr[0], this.user);//, creator);
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
