import { Component, Input } from '@angular/core';
import { Dienst } from 'src/app/shared/dienste/dienst';

@Component({
  selector: 'a.fab-dienstlist-item',
  templateUrl: './dienstlist-item.component.html',
  styleUrls: ['./dienstlist-item.component.css']
})
export class DienstlistItemComponent {
  @Input() dienst: Dienst;
  @Input() last: Dienst;
}
