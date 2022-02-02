import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercice-a7',
  templateUrl: './exercice-a7.component.html',
  styleUrls: ['./exercice-a7.component.scss']
})
export class ExerciceA7Component implements OnInit {

  voiture = [
    {
      modele: "Peugeot e Deux cent huit",
      puissance: "260Nm",
      prix: 37000,
      dateFabrication: Date.now()
    },
    {
      modele: "Renault Arkana",
      puissance: "140ch",
      prix: 36000,
      dateFabrication: Date.now() 
    },
    {
      modele: "Volkswagen Tiguan",
      puissance: "150CV",
      prix: 55000,
      dateFabrication: Date.now() 
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
