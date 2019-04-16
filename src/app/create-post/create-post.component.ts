import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Post } from '../models/post.model';
import { Profile } from '../models/profile.model';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent{
  @Output() createClicked = new EventEmitter()

  createPostButtonClicked(text: string){
    let arr = [text];
    this.createClicked.emit(arr);
  }
}
