export class Newsitem {
  constructor(
    public id: number,
    public source: string,
    public title: string,
    public description: string,
    public url: string,
    public urlToImage: string,
    public publishedAt: string,
    public content: string,
    public author?: any
  ) { }
}
