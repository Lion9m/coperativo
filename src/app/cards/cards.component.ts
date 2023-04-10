import { Component } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent {

  //hide = true

  //mostrarTelaAtual = true

  img!:File;
  //primeiro card
  id!:string;
  nome!:string;
  email!:string;
  senha!:string;
  rota!:string;
  //segundo card
  id2!:string;
  nome2!:string;
  email2!:string;
  senha2!:string;
  rota2!:string;
  //terceiro card
  id3!:string;
  nome3!:string;
  email3!:string;
  senha3!:string;
  rota3!:string;


  url = "https://rhuna.herokuapp.com/crud/";

  async getData1(){

    await axios.get("https://rhuna.herokuapp.com/crud")
    .then((response) => {


      let lista = response.data.length;
      //1o card
      this.nome = response.data[lista -3].nome;
      this.email = response.data[lista -3].email;
      this.senha = response.data[lista -3].senha;
      this.rota = response.data[lista -3].rota;

      //2o card
      this.nome2 = response.data[lista -2].nome;
      this.email2 = response.data[lista -2].email;
      this.senha2 = response.data[lista -2].senha;
      this.rota2 = response.data[lista -2].rota;

      //3o card
      this.nome3 = response.data[lista -1].nome;
      this.email3 = response.data[lista -1].email;
      this.senha3 = response.data[lista -1].senha;
      this.rota3 = response.data[lista -1].rota;
      console.log(response)
    }
    ).catch((error) => {
      console.log(error);
    })
}
}
