import { Component, OnInit } from '@angular/core';
import { Producto } from '../generales/interfacesAPI/Producto';
import { SolicitanteProductosService } from './elementos-producto/api/solicitante-productos.service';

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css']
})
export class ListaProductosComponent implements OnInit {
  pagina: number;
  listaProductos: Producto[][];

  constructor(
    private soliApiProductos:SolicitanteProductosService
  ) {
    this.pagina=0;
    this.listaProductos=[];
   }

  ngOnInit(): void {
    this.traerProductos()
  }

  public traerProductosAnt(){
    this.pagina = this.pagina-2;
    this.traerProductos();
  }

  public traerProductos(){
    let listaProductosaux: Producto[] = [];
    this.soliApiProductos.traerProductosD(this.pagina).subscribe((aux:any) =>
    {
      listaProductosaux = aux?._embedded.productoes;
      this.listaProductos =this.groupArray(listaProductosaux,2);
      this.pagina ++;
    });
  }

  private groupArray<T>(data: Array<T>, n: number) {
    let group = new Array<T[]>();
    for (let i = 0, j = 0; i < data.length; i++) {
        if (i >= n && i % n === 0)
            j++;
        group[j] = group[j] || [];
        group[j].push(data[i])
    }
    return group;
  }
  
}
