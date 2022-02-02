import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercice-b4',
  templateUrl: './exercice-b4.component.html',
  styleUrls: ['./exercice-b4.component.scss']
})
export class ExerciceB4Component implements OnInit {

  isVisible = {
    un: true,
    deux: false,
    trois: false
  }

  constructor() { }

  ngOnInit(): void {
  }

  toggle(section: string) {
    let section1:string
    let section2:string
    let section3:string
    if('section1' == section){
      this.isVisible.un = true;
      this.isVisible.deux = false;
      this.isVisible.trois= false;
    }
    if('section2' == section) {
      this.isVisible.un = false;
      this.isVisible.deux = true;
      this.isVisible.trois= false;
    }
    if('section3' == section) {
      this.isVisible.un = false;
      this.isVisible.deux = false;
      this.isVisible.trois= true;
    }
  }
  
}
