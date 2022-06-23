import { Links } from "./Links";

export interface Producto {
    descripcion: String;
    precio: number;
    stock:number;
    _links: Links; //Van a ser de tipo string ya que apartir de esto vuelvo a llamar a la api
    //Para volver a pedir su informacion
}
