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
    let newProfile = new Profile(firstName, lastName, email, password);
    this.profileService.addProfile(newProfile);
 }

}
