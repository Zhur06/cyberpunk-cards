import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import { CardComponent } from "./card/card.component";
import { ICard } from './card/icard';
import { BackgroundComponent } from "./background/background.component";


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [CommonModule, RouterOutlet, CardComponent, BackgroundComponent]
})
export class AppComponent {
  title = 'cyberpunk-cards';

  cards: ICard[] = [
    {
      name: "Card 1",
      image: "/assets/photos/1/1.jpeg",
    },
    {
      name: "Card 2",
      image: "/assets/photos/2/1.jpeg",
    },
    {
      name: "Card 3",
      image: "/assets/photos/3/1.jpeg",
    },
    {
      name: "Card 4",
      image: "/assets/photos/4/1.jpeg",
    },
    {
      name: "Card 5",
      image: "/assets/photos/5/1.jpeg",
    },
    {
      name: "Card 6",
      image: "/assets/photos/6/1.jpeg",
    },
    {
      name: "Card 7",
      image: "/assets/photos/7/1.jpg",
    },
    {
      name: "Card 8",
      image: "/assets/photos/8/1.jpg",
    },
    {
      name: "Card 9",
      image: "/assets/photos/9/1.jpg",
    },
    {
      name: "Card 10",
      image: "/assets/photos/10/1.jpg",
    },
    {
      name: "Card 11",
      image: "/assets/photos/11/1.jpg",
    },
  ];
}
