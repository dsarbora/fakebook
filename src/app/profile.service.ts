import { Injectable } from '@angular/core';
import { Profile } from './models/profile.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';


@Injectable()
export class ProfileService {
  profiles: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.profiles = database.list('profiles');
   }
  
  getProfiles(){
    return this.profiles;
  }

  getProfileById(userId: string){
    return this.database.object('profiles/' + userId);
  }

  addProfile(newProfile: Profile){
    this.profiles.push(newProfile);
  }
}
