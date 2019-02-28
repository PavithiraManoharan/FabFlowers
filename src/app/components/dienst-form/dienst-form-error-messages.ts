export class ErrorMessage {
  constructor(
    public forControl: string,
    public forValidator: string,
    public text: string
  ) {}
}

export const DienstFormErrorMessages = [
  new ErrorMessage('id', 'required', 'Eine ID muss eingegeben werden'),
  new ErrorMessage('name', 'required', 'Der Produktname muss eingegeben werden'),
  new ErrorMessage('shortdesc', 'required', 'Eine Kurzbeschreibung muss eingegeben werden'),
  new ErrorMessage('price', 'required', 'Der Preis muss eingegeben werden'),
  new ErrorMessage('image', 'required', 'Das Produkt muss ein Bild haben'),
  new ErrorMessage('featured', 'required', 'Dieses Feld ist ein Pflichtfeld'),
  new ErrorMessage('longdesc', 'required', 'Es muss eine Langbeschreibung eingegeben werden'),
];
