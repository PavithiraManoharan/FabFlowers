import { NewsitemRaw } from './newsitem-raw';
import { Newsitem } from './newsitem';
import { identifierModuleUrl } from '@angular/compiler';

export class NewsitemFactory {
  static empty(): Newsitem {
    return new Newsitem(0, '', '', '', '', '', '', '', null);
  }

  static fromObject(rawNewsitem: NewsitemRaw | any): Newsitem {
    return new Newsitem(
      rawNewsitem.id,
      rawNewsitem.string,
      rawNewsitem.title,
      rawNewsitem.description,
      rawNewsitem.url,
      rawNewsitem.urlToImage,
      rawNewsitem.publishedAt,
      rawNewsitem.content,
      rawNewsitem.any
    );
  }
}
