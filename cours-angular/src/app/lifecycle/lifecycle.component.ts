import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.scss']
})
export class LifecycleComponent implements OnInit {
  afficher = true;

  constructor() { }

  ngOnInit(): void {
  }

  basculerAffichage() {
    this.afficher = !this.afficher
  }


}
