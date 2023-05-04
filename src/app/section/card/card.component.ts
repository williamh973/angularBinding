import { Component } from '@angular/core';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})

export class CardComponent {

  myCard: Card;

  constructor() {
    this.myCard = new Card('./assets/images/johnDoe.png', 'Hello John', 25, 'Quote here');
  }

  updateCard(value: string) {
    this.myCard.updateQuote(value);
  }
  inputValue = '';
}

export class Card {
  image: string;
  title: string;
  age: number;
  quote: string;
  inputValue = '';

  constructor(image: string, title: string, age: number, quote: string) {
    this.image = image;
    this.title = title;
    this.age = age;
    this.quote = quote;
  }

  updateQuote(value: string) {
    this.quote = value;
  }
}
