import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Producto } from '../generales/interfacesAPI/Producto';
import { EmisorProductoService } from './api/emisor-producto.service';

@Component({
  templateUrl: './nuevo-producto.component.html',
  styleUrls: ['./nuevo-producto.component.css']
})
export class NuevoProductoComponent implements OnInit {
  formulario:FormGroup|null;
  nuevoProducto: Producto = {} as Producto;

  constructor(
    private formBuilder: FormBuilder,
    private router : Router,
    private emisor: EmisorProductoService
  ) { 
    this.formulario=null;
  }

  ngOnInit(): void {
    this.inicalizarFormulario()
  }

  private inicalizarFormulario(){
    this.formulario=this.formBuilder.group({
      descripcion:['', Validators.required],
      precio:[10, Validators.required],
      stock:[1, Validators.required]
    })
  }

  subir(){
    this.nuevoProducto.descripcion = this.formulario?.get('descripcion')?.value;
    this.nuevoProducto.precio = this.formulario?.get('precio')?.value;
    this.nuevoProducto.stock = this.formulario?.get('stock')?.value;

    if(this.nuevoProducto != null){
      this.emisor.postProducto(this.nuevoProducto);
      alert("Se agregó el nuevo producto.");
    }else{
      alert("No se pudo agregar el producto.")
    }
    this.router.navigate(['/productos']);
  }
}
