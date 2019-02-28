import { StringMap } from '@angular/core/src/render3/jit/compiler_facade_interface';

export class Dienst {
  constructor(
    public id: string,
    public name: string,
    public shortdesc: string,
    public featured: boolean,
    public longdesc: string,
    public price: number,
    public image: string
  ) { }
}
