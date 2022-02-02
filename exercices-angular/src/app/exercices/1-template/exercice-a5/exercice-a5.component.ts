import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercice-a5',
  templateUrl: './exercice-a5.component.html',
  styleUrls: ['./exercice-a5.component.scss'],
})
export class ExerciceA5Component implements OnInit {
  heure = new Date().getHours()
  annee = new Date().getFullYear()

estbissextile = function(year:number){
  if ((year % 4 != 0 ) || (year % 100 == 0) && (year % 400 != 0) ) {
    return false
  } else {
return true
  }
}

  constructor() { }

  ngOnInit(): void {
  }

}
