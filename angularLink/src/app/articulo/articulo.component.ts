import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Producto } from '../generales/interfacesAPI/Producto';
import { SolicitanteProductosService } from '../lista-productos/elementos-producto/api/solicitante-productos.service';
import { CompradorService } from './api/comprador.service';

@Component({
  templateUrl: './articulo.component.html',
  styleUrls: ['./articulo.component.css']
})
export class ArticuloComponent implements OnInit {
  formulario: FormGroup|null;
  elProducto : Producto = {} as Producto;
  nombreProducto: any;
  cantidad:number;

  constructor(
    private activatedRoute: ActivatedRoute,
    private route: Router,
    private comprador: CompradorService,
    private soli:SolicitanteProductosService,
    private formBuilder:FormBuilder
  ) { 
    this.formulario=null;
    this.nombreProducto='';
    this.cantidad=1;
  }

  ngOnInit(): void {
    this.nombreProducto= this.activatedRoute.snapshot.paramMap.get('descripcion');
    this.soli.traerProductoByNombre(this.nombreProducto).subscribe((aux:any) =>{
      this.elProducto= aux;
    });
    this.inicializarFormulario();
  }

  private inicializarFormulario(){
    this.formulario=this.formBuilder.group({
      cantidad:[1, Validators.required],
    })
  }

  agregarAlCarrito(){
    this.cantidad = this.formulario?.get('cantidad')?.value;
    this.comprador.postProducto(this.elProducto,this.cantidad);
    alert("Se agregó el producto al carrito")
    this.route.navigate(['productos']);
  }

  borrar(){
    console.log(this.elProducto.idprod);
    this.comprador.deleteProducto(this.elProducto.idprod);
    alert("Se borró el producto")
    this.route.navigate(['productos']);
  }

  editar(){
    this.route.navigate(['/editarProducto',this.elProducto.descripcion]);
  }
}
