import { Dienst } from './../../shared/dienste/dienst';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DienstFactory } from 'src/app/shared/dienste/dienst-factory';
import { DienstService } from 'src/app/shared/dienste/dienst.service';

@Component({
  selector: 'fab-dienst-details',
  templateUrl: './dienst-details.component.html',
  styleUrls: ['./dienst-details.component.css']
})
export class DienstDetailsComponent implements OnInit {
  dienst: Dienst = DienstFactory.empty();

  constructor(
    private ds: DienstService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    const params = this.route.snapshot.params;
    this.ds.getSingle(params.id).subscribe(d => this.dienst = d);
  }

  removeDienst() {
    if (confirm('Dieser Service wirklich löschen?')) {
      this.ds.remove(this.dienst.id)
      .subscribe(res => this.router.navigate(['../'], { relativeTo: this.route }));
    }
  }

}
