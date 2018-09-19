export class Pedido {
  constructor(
	public id: number,
    public nombre: string,
    public tipoid: string,
    public cedula: string,
	public fechahora: string,
	public direccion: string,
	public articulos: string
  ) {  }
}
