import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';
import { UsuarioConID } from 'src/app/interfaces/usuarios'
import { ProductoServiceService } from 'src/app/services/producto-service.service';


@Component({
  selector: 'app-modificar-usuario',
  templateUrl: './modificar-usuario.page.html',
  styleUrls: ['./modificar-usuario.page.scss'],
})
export class ModificarUsuarioPage implements OnInit {

  public idActiva = 0;
  public usuarioActivo! : UsuarioConID;
  public formularioRegistro : FormGroup;

  constructor(
    private fb:FormBuilder,
    private apiUsuarios : ProductoServiceService,
    private router : Router,
    private rutaActiva : ActivatedRoute,

  )
  {
    this.crearFormulario();
  }

  public crearFormulario(){
    this.formularioRegistro = this.fb.group({
      nombre_usuario: new FormControl('', [ Validators.minLength(3), Validators.maxLength(20)]),
      pass: new FormControl(4806, [ Validators.minLength(20), Validators.maxLength(30)]),
      admin: new FormControl(true, [Validators.required])
    })
  }



  public guardarDatos(){
    if(this.formularioRegistro.invalid){
      this.formularioRegistro.markAllAsTouched();
      return;
    }
    this.apiUsuarios.modificarUsuarioId(this.idActiva,{
      ...this.formularioRegistro.value,

    })
    .subscribe(data => {
      this.router.navigate(['/listar-usuarios']);

    })
  }

  ngOnInit()
  {
    this.rutaActiva.paramMap.subscribe(parametros=> {
      this.idActiva = +parametros.get('idUsuario');
      this.apiUsuarios.buscarUsuarioId(this.idActiva).subscribe(
        usuario =>{
          if (usuario){
            this.usuarioActivo = usuario;
            this.formularioRegistro.setValue({
              ...this.usuarioActivo
            });
            this.formularioRegistro.updateValueAndValidity();
          } else{
            this.router.navigate(['/listar-usuario'])
          }
        }
      )
    })
  }

}
