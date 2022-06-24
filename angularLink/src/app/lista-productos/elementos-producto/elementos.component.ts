import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from 'src/app/generales/interfacesAPI/Producto';
import { SolicitanteProductosService } from './api/solicitante-productos.service';

@Component({
  selector: 'app-elementos',
  templateUrl: './elementos.component.html',
  styleUrls: ['./elementos.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ElementosComponent implements OnInit {
  @Input() parProductos: Producto[];

  constructor(
    private soliApiProductos:SolicitanteProductosService,
    private router: Router
  ) {
    this.parProductos=[];
   }

  ngOnInit(): void {
  }

  abrirProducto(unProducto:Producto){
    this.router.navigate(['/articulo',unProducto.idprod]);
  }
}
