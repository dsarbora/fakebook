import { Component, Output, EventEmitter } from '@angular/core';
import { Profile } from '../models/profile.model';

@Component({
  selector: 'app-create-profile',
  templateUrl: './create-profile.component.html',
  styleUrls: ['./create-profile.component.css']
})
export class CreateProfileComponent {

  @Output() profileCreated = new EventEmitter();

  createNewAccount(firstName: string, lastName: string, email: string, password: string){
    let newProfile = new Profile(firstName, lastName, email, password);
    this.profileCreated.emit(newProfile);
 }

}
