import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import { CardComponent } from "./card/card.component";
import { ICard } from './card/icard';
import { BackgroundComponent } from "./background/background.component";

import { data } from './data';

interface IStoredCard {
  person: string;
  photo: string;
  desc: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [CommonModule, RouterOutlet, CardComponent, BackgroundComponent],
})
export class AppComponent {
  title = 'cyberpunk-cards';

  private _parsedData: IStoredCard[] = JSON.parse(data).cards;

  cards: ICard[] = this._parsedData.map((card: IStoredCard) => ({
    name: card.person,
    description: card.desc,
    image: card.photo,
  }));
}
