import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercice-b6',
  templateUrl: './exercice-b6.component.html',
  styleUrls: ['./exercice-b6.component.scss']
})
export class ExerciceB6Component implements OnInit {

  prenom:string ='toi'

  abonne: boolean = false

  constructor() { }

  ngOnInit(): void {
  }

}
