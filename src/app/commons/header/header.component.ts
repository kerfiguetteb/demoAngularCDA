import { Component } from '@angular/core';
import { HorlogeComponent } from "../../components/horloge/horloge.component";

@Component({
  selector: 'app-header',
  imports: [HorlogeComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
