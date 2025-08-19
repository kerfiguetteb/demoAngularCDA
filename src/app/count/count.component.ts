import { Component } from '@angular/core';

@Component({
  selector: 'app-count',
  imports: [],
  templateUrl: './count.component.html',
  styleUrl: './count.component.css'
})
export class CountComponent {
  count :number = 0

  incrementer(){
    this.count = this.count + 1;
  }

  decremnter(){
    if (this.count <= 0) {
      return;
    }

    this.count = this.count - 1;
  }
}
