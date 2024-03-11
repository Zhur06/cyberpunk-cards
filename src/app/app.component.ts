import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';


interface ICard {
  name: string;
  previewImageUrl: string;
  supportingImageUrl?: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'cyberpunk-cards';

  cards: ICard[] = [
    {
      name: "Card 1",
      previewImageUrl: "/assets/photos/1/1.jpeg",
    },
    {
      name: "Card 2",
      previewImageUrl: "/assets/photos/2/1.jpeg",
    },
    {
      name: "Card 3",
      previewImageUrl: "/assets/photos/3/1.jpeg",
    },
    {
      name: "Card 4",
      previewImageUrl: "/assets/photos/4/1.jpeg",
    },
    {
      name: "Card 5",
      previewImageUrl: "/assets/photos/5/1.jpeg",
    },
    {
      name: "Card 6",
      previewImageUrl: "/assets/photos/6/1.jpeg",
    },
    {
      name: "Card 7",
      previewImageUrl: "/assets/photos/7/1.jpg",
    },
    {
      name: "Card 8",
      previewImageUrl: "/assets/photos/8/1.jpg",
    },
    {
      name: "Card 9",
      previewImageUrl: "/assets/photos/9/1.jpg",
    },
    {
      name: "Card 10",
      previewImageUrl: "/assets/photos/10/1.jpg",
    },
    {
      name: "Card 11",
      previewImageUrl: "/assets/photos/11/1.jpg",
    },
  ];
}
