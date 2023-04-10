import { Component } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent {

  hide = true

  mostrarTelaAtual = true

  id!: string
  nome!: string
  email!: string
  senha!: string
  rota!: string;
  img!: File;
  imgUrl!: string;

  selecionarImagem(event: any): void {
    this.img = event.target.files[0];
  }

}
