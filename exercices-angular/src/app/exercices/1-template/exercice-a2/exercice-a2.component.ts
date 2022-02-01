import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercice-a2',
  templateUrl: './exercice-a2.component.html',
  styleUrls: ['./exercice-a2.component.scss']
})
export class ExerciceA2Component implements OnInit {

  promotion = [ 2018, 2019, 2020, 2021, 2022];

  maClasse = {
    nom: 'DIW JS 17',
    specialite: 'Javascript',
    nombreInscrits: 11
  }

  constructor() { }

  ngOnInit(): void {
  }

}
