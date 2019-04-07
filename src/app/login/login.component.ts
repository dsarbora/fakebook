import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{
  @Output() buttonClicked = new EventEmitter();

  loginButtonClicked(bool){
    console.log("Login button clicked");
    this.buttonClicked.emit(bool);
  }
}
