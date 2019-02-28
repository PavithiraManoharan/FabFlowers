import { Employee } from './../../shared/employees/employee';
import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/shared/employees/employee.service';

@Component({
  selector: 'fab-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {
  employees: Employee[];
  constructor(private es: EmployeeService) { }
  ngOnInit() {
    this.es.getAll().subscribe(res => this.employees = res);
  }
}
