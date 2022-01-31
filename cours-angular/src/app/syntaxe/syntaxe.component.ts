import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-syntaxe',
  templateUrl: './syntaxe.component.html',
  styleUrls: ['./syntaxe.component.scss']
})
export class SyntaxeComponent implements OnInit {

  nom = 'Benjamin';

  eleves= ['Anne', 'Lies', 'Benjamin','Saraba', 'Jérôme'];

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

  constructor() { 

    window.setInterval(() => {
      this.affichePara1 = Math.random() > 0.5;
      this.affichePara2 = Math.random() > 0.3;
    },2000)

  }

  ngOnInit(): void {
  }

}
