import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pageable } from 'src/app/generales/interfacesAPI/Pageable';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SolicitanteProductosService {
  private URL: string = environment.ApiURL;

  constructor(
    private http:HttpClient
  ) {
   }

  public traerProductosD(pagina:number){
    const prodDesordenados: string = this.URL + '/productos?page=' + pagina + '&size=4';
    return this.http.get<Pageable>(prodDesordenados);
  }

  public traerProductosByNombre(){
    const prodByNombre: string = '${URL}/productos?page=0&size=4&sort=desc'
  }

  public traerProductoByNombre(nombre:string){
    let urlPedidoNombre: string = this.URL + '/productos/search/findByDescripcion?descripcion=' + nombre;
    return this.http.get(urlPedidoNombre);
  }
}
