import { NewsitemService } from './../../shared/newsitems/newsitem.service';
import { Component, OnInit, AfterViewInit, AfterContentInit } from '@angular/core';
import { Newsitem } from 'src/app/shared/newsitems/newsitem';

@Component({
  selector: 'fab-newsitem-list',
  templateUrl: './newsitem-list.component.html',
  styleUrls: ['./newsitem-list.component.css']
})
export class NewsitemListComponent implements OnInit {
  newsitems: Newsitem[];
  randomNews: Newsitem[];
  randomPositions: number[];

  constructor(private ns: NewsitemService) {
    this.randomPositions = [
      this.getRandomInt(19),
      this.getRandomInt(19),
      this.getRandomInt(19),
      this.getRandomInt(19),
      this.getRandomInt(19),
      this.getRandomInt(19)
    ];
    this.randomPositions = Array.from(new Set(this.randomPositions)); // this removes the duplicates
    this.randomNews = [];
  }

  ngOnInit() {
    this.ns.getAll().subscribe(
      res => this.newsitems = res, // callback function
      (error) => console.error(error), // error function
      () => { // on complete, take random numbers and display the news corresponding to those indices
        for (const newsitem of this.newsitems) {
          for (const randomInt of this.randomPositions) {
            if (randomInt === (newsitem.id - 1)) {
              this.randomNews.push(newsitem);
            }
          }
        }
      }
    );
  }

  getRandomInt(max: number): number {
    return Math.floor(Math.random() * Math.floor(max));
  }
}
