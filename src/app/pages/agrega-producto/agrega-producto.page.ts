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
    'Repartos S.A',
    'Proveedores SPA',
    'Abarrotes S.A',
    'Repartos INC',
    'Voladores S.A',
    'Comidas S.A',
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
        precio_compra : new FormControl(0, [Validators.required, Validators.min(500), Validators.max(200000)]),
        precio_venta : new FormControl(0,[Validators.required, Validators.min(500),Validators.max(500000)]),
        largo : new FormControl(0, [Validators.required, Validators.min(1), Validators.max(400)]),
        ancho : new FormControl(0, [Validators.required, Validators.min(1), Validators.max(400)]),
        proveedor : new FormControl('',Validators.required),
        stock : new FormControl(0, [Validators.required, Validators.min(1), Validators.max(10000)]),
        fecha_elaboracion : new FormControl(2014,[Validators.required,Validators.min(2014)])
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
      this.router.navigate(['']);
      alert('producto agregado con exito ')
    })
  }

  ngOnInit() {

  }

}
