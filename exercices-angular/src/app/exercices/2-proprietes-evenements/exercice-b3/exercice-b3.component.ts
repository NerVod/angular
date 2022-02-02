import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercice-b3',
  templateUrl: './exercice-b3.component.html',
  styleUrls: ['./exercice-b3.component.scss']
})
export class ExerciceB3Component implements OnInit {

  compteur:number = 0
  increment:number = 1
  incrementation: number = 1
  decrementation :number = -1
  txtIncrement = 'Incrémentation'
  txtDecrement = 'Décrémentation'
  txtBouton: string = 'Incrémentation'
  
  constructor() { }
  
  ngOnInit(): void {
  }
  
  incrementer() {
    if(this.compteur >= 10) {
      this.increment = this.decrementation
      this.txtBouton = this.txtDecrement
    }
    if(this.compteur <=  0) {
      this.increment = this.incrementation
      this.txtBouton = this.txtIncrement
    }
    
    this.compteur += this.increment
  };

  
}
