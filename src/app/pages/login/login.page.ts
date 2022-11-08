import { Component, OnInit } from '@angular/core';
import { ProductoServiceService } from "./../../services/producto-service.service"
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Usuarios } from 'src/app/interfaces/usuarios';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public usurioinicio: Array<any> = [];
  public formulario: FormGroup;
  public usuario: Usuarios;
  constructor(
    private apiUsuario: ProductoServiceService, private fb: FormBuilder, private router : Router
  ) { this.formularioinicio(); }

  ngOnInit() {
    this.apiUsuario.listarUsers.subscribe(datos => { this.usurioinicio = datos; console.log(datos) });
    this.apiUsuario.iniciosesion();
    console.log(this.usurioinicio)
  }
  public iniciar() { console.log(this.usurioinicio) };

  public formularioinicio() {
    this.formulario = this.fb.group({
      nombre_usuario: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
      pass: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(1000)]),
    })
  }
  public campo(control: string) {
    return this.formulario.get(control);
  }
  public tocado(control: string): boolean {
    return this.formulario.get(control).touched;
  }

  public iniciarsesion() {
    this.usuario = this.usurioinicio.find(user => {
      let inicio = this.formulario.value.nombre_usuario
      return user.nombre_usuario === inicio
    });
    console.log(this.formulario.value)
    if (this.usuario) {
      if (this.usuario.pass == this.formulario.value.pass) { if (this.usuario.admin == '1') { this.router.navigate(['listar-producto']) }
      else { this.router.navigate(['listar-producto-usuario-normal']) } }
      else { }
    }
    else {  }
  }

}
