import { Component, Output, EventEmitter } from '@angular/core';
import { Profile } from '../models/profile.model';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-create-profile',
  templateUrl: './create-profile.component.html',
  styleUrls: ['./create-profile.component.css'],
  providers: [ProfileService]
})
export class CreateProfileComponent {

  @Output() profileCreated = new EventEmitter();

  constructor(private profileService: ProfileService){}

  createNewAccount(firstName: string, lastName: string, email: string, password: string){
    if(firstName&&lastName&&email&&password){
      let newProfile = new Profile(firstName, lastName, email, password);
      this.profileService.addProfile(newProfile);
      alert(`Hi ${firstName} ${lastName}, your new account email is ${email} and your password is ${password}.`);
    }
    else{
      alert("Please fill out all fields");
    }
  }
}
