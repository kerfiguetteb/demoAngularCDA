import { Component, OnDestroy, OnInit } from '@angular/core';
import { EnfantComponent } from "./enfant/enfant.component";

@Component({
  selector: 'app-horloge',
  imports: [EnfantComponent],
  templateUrl: './horloge.component.html',
  styleUrl: './horloge.component.css'
})
export class HorlogeComponent implements OnInit, OnDestroy {

  fuseaux : string[] = [
    'Europe/Paris',
    'Europe/London',
    'America/Los_Angeles',
  ];

  heures: any = {};

  interval!:any

  private updateTimes(){
    this.fuseaux.forEach(zone => {
      const date = new Date().toLocaleString('fr-Fr', {timeZone:zone})
      this.heures[zone] = date.split(' ')[1];
    })
  }

  ngOnInit(): void {
    this.updateTimes();
    this.interval = setInterval(() => this.updateTimes(), 1000)
  }

  ngOnDestroy(): void {
    if (this.interval) {
      clearInterval(this.interval)
    }
  }
}
