import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {
  intervalId?: number;
  compteur = 0;
  utilisateur = {
    nom:'Skywalker',
    prenom:'Luke',
  }

  constructor() { }

  ngOnInit(): void {
    console.log('OnInit ...');
    this.intervalId = window.setInterval(() => {
      console.log('Une seconde est passée')
    },1000)
  }

  ngOnDestroy() {
    console.log('OnDestroy');
    window.clearInterval(this.intervalId)
  }

  plus() {
    this.compteur ++
  }


  //  inutile avec [(ngModel)] :
  // majPrenom(inputNom: HTMLInputElement): void {
  //   console.log(inputNom.value)
  //   this.utilisateur.prenom= inputNom.value
  // }
  

  


}
