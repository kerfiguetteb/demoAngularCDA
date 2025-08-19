import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-template-form-driven',
  imports: [FormsModule],
  templateUrl: './template-form-driven.component.html',
  styleUrl: './template-form-driven.component.css'
})
export class TemplateFormDrivenComponent {
  articles:string[] = ['fraise', 'banane', 'kiwi']
  
  value:string = ''




}
