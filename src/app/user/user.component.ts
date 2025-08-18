import { Component, Input } from '@angular/core';
import User from '../models/user.model';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input() user!:User;

  supprimer(){
    this.user.active = false;
    
  }
}
