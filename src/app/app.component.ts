import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from "./footer/footer.component";
import User from './models/user.model';
import { TemplateFormDrivenComponent } from "./template-form-driven/template-form-driven.component";
import { ReactiveformComponent } from "./reactiveform/reactiveform.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, FooterComponent, TemplateFormDrivenComponent, ReactiveformComponent],
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


  title: string = "demo";
  soustitre: string = "demo2";

  hidden:boolean = false;

  toogle(){
    this.hidden = !this.hidden
  }

}
