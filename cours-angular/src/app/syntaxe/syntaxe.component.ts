import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-syntaxe',
  templateUrl: './syntaxe.component.html',
  styleUrls: ['./syntaxe.component.scss']
})
export class SyntaxeComponent implements OnInit {

  nom = 'Benjamin';

  eleves= ['Anne', 'Lies', 'Benjamin','Saraba', 'Jérôme', 'Kamil', 'Ludovic'];

  hydrogene = {
    numero:1,
    nom: 'Hydrogène'
  };

  elements = [
    {
      numero: 1,
      nom: 'Hydrogène'
    },
    {
      numero: 2,
      nom: 'Hélium'
    },
    {
      numero: 3,
      nom: 'Lithium'
    }
  ];

  trois = 3;
  deux = 2;

  affichePara1 = true;
  affichePara2 = true;

  etatDeMonChamps= true;


  costumeDeChien = "https://www.mascotte-france.fr/wp-content/uploads/2018/01/mascotte-chien-bernois-510x510.jpg";
  images = [
    "https://www.mascotte-france.fr/wp-content/uploads/2017/12/mascotte-gorille-qui-porte-510x510.jpg",
    "https://www.mascotte-france.fr/wp-content/uploads/2017/12/mascotte-orque-510x510.jpg",
    "https://www.mascotte-france.fr/wp-content/uploads/2018/01/mascotte-banane.jpg"

  ]

  constructor() { 

    window.setInterval(() => {
      this.affichePara1 = Math.random() > 0.5;
      this.affichePara2 = Math.random() > 0.3;
    },2000);

    window.setTimeout(() => {
      this.eleves.push('Tiina', 'Kim');
      this.etatDeMonChamps= false;
    },6000)

  }

  ngOnInit(): void {
  }

  desactiverChamps() {
    this.etatDeMonChamps = true
  }
  activerChamps() {
    this.etatDeMonChamps = false
  }

  message(texteDuMessage: string) {
    console.log(texteDuMessage)
  }

}
