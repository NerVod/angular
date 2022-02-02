import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercice-b2',
  templateUrl: './exercice-b2.component.html',
  styleUrls: ['./exercice-b2.component.scss']
})
export class ExerciceB2Component implements OnInit {

  animaux = [
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Siberian_Tiger_sf.jpg/440px-Siberian_Tiger_sf.jpg',
      description: 'Tigre de Sibérie',
      domestique: false,
      pattes: 4,
    },
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Pelikan_Walvis_Bay.jpg/440px-Pelikan_Walvis_Bay.jpg',
      description: 'Pélican',
      domestique: false,
      pattes: 2,
    },
    {
      url: 'https://imgix.bustle.com/uploads/image/2018/10/18/4e1afb93-afba-49fe-96e6-b2bbd1ea0125-safe-toys-for-kittens.jpg',
      description: 'Chaton jouant avec une boule d’élastiques',
      domestique: true,
      pattes: 4,
    },
    {
      url: 'https://www.hillspet.co.id/content/dam/cp-sites/hills/hills-pet/en_us/exported/cat-care/healthcare/images/girl-holds-smiling-kitten.jpg',
      description: 'Un chaton féroce',
      domestique: true,
      pattes: 4,
    },
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Cockatiel_%28Nymphicus_hollandicus%29_perched_in_a_tree.jpg/435px-Cockatiel_%28Nymphicus_hollandicus%29_perched_in_a_tree.jpg',
      description: 'Perruche (Calopsitte élégante)',
      domestique: true,
      pattes: 2,
    },
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Plexippus_petersi_%28jumping_spider%29_on_a_human_finger_at_golden_hour.jpg/440px-Plexippus_petersi_%28jumping_spider%29_on_a_human_finger_at_golden_hour.jpg',
      description: 'Araignée (Plexippus petersi)',
      domestique: false,
      pattes: 8,
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
