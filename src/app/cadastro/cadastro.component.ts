import { Component } from '@angular/core';
import axios from 'axios';

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

  //==================================================================================================================//
  //==================================================================================================================//
  async criarDado(){

    const url = "https://rhuna.herokuapp.com/crud";

     const formData = new FormData();
       formData.append("nome", this.nome )
       formData.append("email", this.email )
       formData.append("senha", this.senha )
       formData.append("file", this.img);

     await axios.post(url, formData, {
       headers: {
         'Content-Type': 'multipart/form-data'
       }
     })
       .then(function(response){
         console.log("Funcionando", response);
       })
       .catch(function (error){
         console.error("Erro", error);
       });
   }
  //==================================================================================================================//
  //==================================================================================================================//
  //get - só dá para pegar a array
  async pegarDado(){

    const url = "https://rhuna.herokuapp.com/crud"

    await axios.get(url)
      .then(response =>{

        let lista = response.data.length

        console.log(response);

        this.id = response.data[lista - 1].id
        this.nome = response.data[lista - 1].nome
        this.email = response.data[lista - 1].email
        this.senha =  response.data[lista - 1].senha
        this.img = response.data[lista - 1].file
      })
      .catch(function(error){
        console.log("Erro", error);
      })
      .finally(function(){
      });
  }
//==================================================================================================================//
//==================================================================================================================//
  //put - ok
  atualizarDado(){

    const url = "https://rhuna.herokuapp.com/crud/" + this.id;

    const formData = new FormData();
      formData.append("nome", this.nome)
      formData.append("email", this.email)
      formData.append("senha", this.senha)
      formData.append("file", this.img);

    axios.put(url, formData,{
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
      .then(response => {
        console.log ("Resposta recebida", response.data);
      })
      .catch(error => {
        console.error("Erro", error);
      });
  }
//==================================================================================================================//
//==================================================================================================================//
}