import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercice-a3',
  templateUrl: './exercice-a3.component.html',
  styleUrls: ['./exercice-a3.component.scss']
})
export class ExerciceA3Component implements OnInit {

  greeting = 'Bonjour !'

  calcul(a: number, b:number) {
    return a / b 
  }

  concat(array:string[]) {
    console.log(array.join(' '))
    array.join(' ')
     return array
  }


  constructor() { }

  ngOnInit(): void {
  }

}

