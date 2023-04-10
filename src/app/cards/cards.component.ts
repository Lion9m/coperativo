import { Component } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent {

  id!: string
  nome!: string
  email!: string
  senha!: string
  rota!: string;
  img!: File;
  imgUrl!: string;

}
