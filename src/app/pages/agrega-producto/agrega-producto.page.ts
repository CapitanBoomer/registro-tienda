import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductoServiceService } from 'src/app/services/producto-service.service';

@Component({
  selector: 'app-agrega-producto',
  templateUrl: './agrega-producto.page.html',
  styleUrls: ['./agrega-producto.page.scss'],
})
export class AgregaProductoPage implements OnInit {
  public formulario : FormGroup;
  public proveedores : Array<string> = [
    'OLX Autos S.A',
    'Shunn Autos SPA',
    'Automotriz Petersens S.A',
    'AutoFruti INC',
    'FacsAutos S.A',
    'TitoAutos S.A',
  ];
  public imagenBase64 = '';
  public cargandoImagen = false;

  constructor(
    private fb : FormBuilder,
    private apiProducto : ProductoServiceService,
    private router : Router
  ) {
    this.crearFormulario();


  }

    public crearFormulario(){
      this.formulario = this.fb.group({
        nombre : new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
        foto : new FormControl('', Validators.required),
        marca : new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
        precio_compra : new FormControl(0, [Validators.required, Validators.min(500), Validators.max(20000000)]),
        precio_venta : new FormControl(0,[Validators.required, Validators.min(500),Validators.max(50000000)]),
        largo : new FormControl(0, [Validators.required, Validators.min(1), Validators.max(400)]),
        ancho : new FormControl(0, [Validators.required, Validators.min(1), Validators.max(400)]),
        color : new FormControl ('', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
        proveedor : new FormControl('',Validators.required),
        patente : new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(6)]),
        fecha_fabricacion : new FormControl(1940,[Validators.required,Validators.min(1940)]),

      })
    }



  public campo(control : string){
    return this.formulario.get(control);
  }

  public tocado(control : string): boolean{
    return this.formulario.get(control).touched;
  }

  public leerArchivo(evento : Event){
    this.cargandoImagen = true;
    const archivo = (evento.target as HTMLInputElement).files[0];
    const reader = new FileReader();
    reader.readAsDataURL(archivo);
    reader.onload = () =>{
      this.imagenBase64 = reader.result as string;
      this.cargandoImagen = false;
    }
  }

  public guardarDatos(){
    if(this.formulario.invalid && !this.cargandoImagen){
      this.formulario.markAllAsTouched();
      return;
    }
    this.apiProducto.agregarProducto({
      ...this.formulario.value,
      foto : this.imagenBase64
    })
    .subscribe(data => {
      this.router.navigate(['/listar-producto']);

    })
  }

  ngOnInit() {

  }

}
