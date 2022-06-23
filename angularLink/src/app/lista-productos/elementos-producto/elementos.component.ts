import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
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
    private soliApiProductos:SolicitanteProductosService
  ) {
    this.parProductos=[];
   }

  ngOnInit(): void {
  }

}
