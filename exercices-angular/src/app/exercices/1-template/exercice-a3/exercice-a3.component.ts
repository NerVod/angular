import { NgForOf } from '@angular/common';
import { calcPossibleSecurityContexts } from '@angular/compiler/src/template_parser/binding_parser';
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

  // concat(arrayOfString) {
  //   for
  // }


  constructor() { }

  ngOnInit(): void {
  }

}

