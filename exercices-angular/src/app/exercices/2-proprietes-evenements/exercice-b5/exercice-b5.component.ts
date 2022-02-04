import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercice-b5',
  templateUrl: './exercice-b5.component.html',
  styleUrls: ['./exercice-b5.component.scss']
})
export class ExerciceB5Component implements OnInit {
  x: number = 0
  y: number = 0

  code: string = " ";

  constructor() { }

  ngOnInit(): void {
  }

  toucheFrappee(code: string ){
    console.log(code);
    this.code = code
    return this.code
  }

  // suivre(Event.pageX: number,y) {
  //   console.log(Event.)
  // }
 
}
