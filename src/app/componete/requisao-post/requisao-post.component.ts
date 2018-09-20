import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Usuario } from '../../model/usuario';
import { Service } from '../../service/service';

@Component({
  selector: 'app-requisao-post',
  templateUrl: './requisao-post.component.html',
  styleUrls: ['./requisao-post.component.css']
})
export class RequisaoPostComponent implements OnInit {


  formRequisicao: FormGroup;
  usuario: Usuario;

  constructor(private fonmBuild: FormBuilder,private service: Service ) { 
    this.usuario = new Usuario
  }

  ngOnInit() {
    this.formRequisicao = this.fonmBuild.group({
      nome: [ '', Validators.required ],
      sobreNome: [ '', Validators.required ],

    })
  }


  submeter(){
    debugger
    console.log(this.formRequisicao.value.nome)
    this.usuario.nome = this.formRequisicao.value.nome
    this.usuario.sobreNome = this.formRequisicao.value.sobreNome
    console.log(this.usuario)

    this.service.post(this.usuario).subscribe(res => {
      console.log(res)
    })

  }

}
