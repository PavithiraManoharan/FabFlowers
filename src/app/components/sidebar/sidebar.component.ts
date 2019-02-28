import { NewsitemService } from './../../shared/newsitems/newsitem.service';
import { Component, OnInit } from '@angular/core';
import { Newsitem } from 'src/app/shared/newsitems/newsitem';

@Component({
  selector: 'fab-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  ngOnInit() {
  }
}
