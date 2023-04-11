import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import axios from 'axios';
import { Observable } from 'rxjs';

interface Dados{

  id:number;
  nome:string;
  email:string;
  senha:string;
  rota:string;


}


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

  listaCards$: Observable<Dados[]>;

  url = "https://rhuna.herokuapp.com/crud/";


  constructor(private maria: HttpClient){
    this.listaCards$ = this.maria.get<Dados[]>(
      "https://rhuna.herokuapp.com/crud"
    ).pipe(
      (res)=>res,
      (err)=> err
    )

  }


}
