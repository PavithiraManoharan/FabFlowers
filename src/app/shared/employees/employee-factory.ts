import { EmployeeRaw } from './employee-raw';
import { Employee } from './employee';

export class EmployeeFactory {
  static empty(): Employee {
    return new Employee(0, '', '', '', '', '', '');
  }

  static fromObject(rawEmployee: EmployeeRaw | any): Employee {
    return new Employee(
      rawEmployee.id,
      rawEmployee.firstname,
      rawEmployee.lastname,
      rawEmployee.image,
      rawEmployee.roll,
      rawEmployee.slogan,
      rawEmployee.desc
    );
  }
}
