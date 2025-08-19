import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './commons/header/header.component';
import { FooterComponent } from "./commons/footer/footer.component";
import User from './models/user.model';
import { CountComponent } from "./components/count/count.component";
import { DatePipe } from '@angular/common';
import { TemplateFormDrivenComponent } from "./components/template-form-driven/template-form-driven.component";
import { ReactiveFormComponent } from './components/reactiveform/reactiveform.component';
import { UserComponent } from './components/user/user.component';
import { HorlogeComponent } from './components/horloge/horloge.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, FooterComponent,ReactiveFormComponent, UserComponent, CountComponent, HorlogeComponent, DatePipe, TemplateFormDrivenComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {

  date = new Date();
  users: User[] = [
    { id: 1, nom: 'kerfi', prenom: 'outman', active: true, imgUrl: 'https://picsum.photos/200/300' },
    { id: 2, nom: 'foo', prenom: 'bar', active: true, imgUrl: 'https://picsum.photos/200/300' },
    { id: 3, nom: 'doe', prenom: 'john', active: true, imgUrl: 'https://picsum.photos/200/300' },
  ]


  title: string = "Angular c'est chaud!!!";
  soustitre: string = "CDA Douai";

  hidden:boolean = false;

  toogle(){
    this.hidden = !this.hidden
  }

}
