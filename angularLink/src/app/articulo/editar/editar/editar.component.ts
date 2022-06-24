import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Producto } from 'src/app/generales/interfacesAPI/Producto';
import { SolicitanteProductosService } from 'src/app/lista-productos/elementos-producto/api/solicitante-productos.service';
import { EmisorProductoService } from 'src/app/nuevo-producto/api/emisor-producto.service';

@Component({
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {
  formulario:FormGroup|null;
  nuevoProducto: Producto = {} as Producto;
  productoAnterior: Producto = {} as Producto;
  nombreProducto: any;

  constructor(
    private formBuilder: FormBuilder,
    private router : Router,
    private activatedRoute:ActivatedRoute,
    private soli:SolicitanteProductosService,
    private emisor: EmisorProductoService
  ) { 
    this.formulario=null;
    this.nombreProducto='';
  }

  ngOnInit(): void {
    this.nombreProducto= this.activatedRoute.snapshot.paramMap.get('descripcion');
    this.soli.traerProductoByNombre(this.nombreProducto).subscribe((aux:any) =>{
      this.productoAnterior= aux;
      console.log(this.productoAnterior.descripcion);
    });
    this.inicalizarFormulario();
  }

  private inicalizarFormulario(){
    this.formulario=this.formBuilder.group({
      descripcion:[this.productoAnterior.descripcion, Validators.required],
      precio:[this.productoAnterior.precio, Validators.required],
      stock:[this.productoAnterior.stock, Validators.required]
    })
  }

  subir(){
    this.nuevoProducto.idprod = this.productoAnterior.idprod;
    this.nuevoProducto.descripcion = this.formulario?.get('descripcion')?.value;
    this.nuevoProducto.precio = this.formulario?.get('precio')?.value;
    this.nuevoProducto.stock = this.formulario?.get('stock')?.value;

    if(this.nuevoProducto != null){
      this.emisor.putProducto(this.nuevoProducto);
      alert("Se agregó el nuevo producto.");
    }else{
      alert("No se pudo agregar el producto.")
    }
    this.router.navigate(['/productos']);
  }
}