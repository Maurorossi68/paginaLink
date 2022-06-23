import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SolicitanteProductosService } from '../lista-productos/elementos-producto/api/solicitante-productos.service';

@Component({
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  constructor(private router: Router,
    private apiProductos: SolicitanteProductosService) { }

  ngOnInit(
    

  ): void {
  }

  public buscarProductos(){
    this.router.navigate(['/productos']);
  }

}
