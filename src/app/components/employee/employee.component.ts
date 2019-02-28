import { Employee } from './../../shared/employees/employee';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'fab-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent  {
  @Input() employee: Employee;
  @Input() last: Employee;
}
