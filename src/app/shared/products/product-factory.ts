import { ProductRaw } from './product-raw';
import { Product } from './product';

export class ProductFactory {
  static empty(): Product {
    return new Product('', '', '', 0, '', 0, false, '');
  }

  static fromObject(rawProduct: ProductRaw | any): Product {
    return new Product(
      rawProduct.id,
      rawProduct.name,
      rawProduct.shortdesc,
      rawProduct.price,
      rawProduct.image,
      rawProduct.available,
      rawProduct.featured,
      rawProduct.fulldesc
    );
  }
}
