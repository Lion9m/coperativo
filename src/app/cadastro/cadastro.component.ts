import { Component } from '@angular/core';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {

  hide = true

  mostrarTelaAtual = true

  id!: string
  nome!: string
  email!: string
  senha!: string
  img!: File;

  selecionarImagem(event: any): void {
    this.img = event.target.files[0];
  }
}
