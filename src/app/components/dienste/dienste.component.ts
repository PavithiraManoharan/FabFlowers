import { Dienst } from './../../shared/dienste/dienst';
import { Component, OnInit } from '@angular/core';
import { DienstService } from 'src/app/shared/dienste/dienst.service';

@Component({
  selector: 'fab-dienste',
  templateUrl: './dienste.component.html',
  styleUrls: ['./dienste.component.css']
})
export class DiensteComponent implements OnInit {
  dienste: Dienst[];
  constructor(private ds: DienstService) { }

  ngOnInit() {
    this.ds.getAll().subscribe(res => this.dienste = res);
  }
}
