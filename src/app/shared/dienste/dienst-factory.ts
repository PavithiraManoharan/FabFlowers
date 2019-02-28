import { Dienst } from './dienst';
import { DienstRaw } from './dienst-raw';

export class DienstFactory {
  static empty(): Dienst {
    return new Dienst('', '', '', false, '', 0, '');
  }

  static fromObject(rawDienst: DienstRaw | any): Dienst {
    return new Dienst(
      rawDienst.id,
      rawDienst.name,
      rawDienst.shortdesc,
      rawDienst.featured,
      rawDienst.longdesc,
      rawDienst.price,
      rawDienst.image
    );
  }
}
