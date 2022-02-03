import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent  {

  constructor(private monServiceTitle: Title) {
    const titreActuel = this.monServiceTitle.getTitle()
    console.log(titreActuel)
    
   }

   nouveauTitre(nouveauTitre: string) {
    this.monServiceTitle.setTitle(nouveauTitre)
    
   }

  

}
