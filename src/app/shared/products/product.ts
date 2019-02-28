export class Product {
  constructor(
    public id: string,
    public name: string,
    public shortdesc: string,
    public price: number,
    public image: string,
    public available: number,
    public featured: boolean,
    public fulldesc: string
  ) { }
}
