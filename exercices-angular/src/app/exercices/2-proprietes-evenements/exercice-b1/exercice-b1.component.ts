import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercice-b1',
  templateUrl: './exercice-b1.component.html',
  styleUrls: ['./exercice-b1.component.scss']
})
export class ExerciceB1Component implements OnInit {

  chien = 'https://i.pinimg.com/564x/38/7c/9a/387c9aee4185afc710684d4ad87eccbc.jpg';

  chats = [
    [{
      URLImage:'https://i.pinimg.com/originals/09/2b/0b/092b0bd19e076f889b3e28dd3b2d7b25.jpg',
      description: "photo façon chat criminel"
    }],
    [{
      URLImage:'https://c.wallhere.com/photos/03/67/1920x1080_px_astronaut_cat_forest_gangster_lake_Ps_Thug_life-1519561.jpg!d',
      description: "chat Ganster armé "
    }],
    [{
      URLImage:'https://img2.freepng.fr/20180326/suw/kisspng-cat-coub-youtube-video-bitly-thug-life-5ab9c0bb6fb079.9311188715221229394575.jpg',
      description: "chat avec bonnet façon gars de la cité"
    }],
   
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
