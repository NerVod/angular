import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercice-b5',
  templateUrl: './exercice-b5.component.html',
  styleUrls: ['./exercice-b5.component.scss']
})
export class ExerciceB5Component implements OnInit {
  x: any= MouseEvent
  y: any= MouseEvent

  code: string = " ";

  constructor() { }

  ngOnInit(): void {
  }

  toucheFrappee(code: string ){
    console.log(code);
    this.code = code;
    return this.code;
  }

// suivre(event:MouseEvent) {
//   this.x = event.pageX; 
//   this.y = event.pageY;
// }
suivre(x:number,y:number) {
  this.x = x; 
  this.y = y
  console.log(x)
  console.log(y)
}

 
}
