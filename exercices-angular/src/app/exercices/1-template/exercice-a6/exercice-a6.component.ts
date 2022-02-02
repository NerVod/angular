import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercice-a6',
  templateUrl: './exercice-a6.component.html',
  styleUrls: ['./exercice-a6.component.scss']
})
export class ExerciceA6Component implements OnInit {

  classe = {
    nom: "DIW JS 17",
    specialite: "Javascript",
    listeInscrits: [
      {
        prenom: "Luke",
        nom: "Skywalker",
        age: 42
      },
      {
        prenom: "Han",
        nom: "solo",
        age: 48,
      },
      {
        prenom: "Leia",
        nom: "Organa",
        age: 42
      },
      {
        prenom: "Mace",
        nom: "Windu",
        age: 56
      }
    ]
  }

  constructor() { }

  ngOnInit(): void {
  }

}
