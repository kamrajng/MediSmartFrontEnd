import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
  import { Employee } from '../employee';
  import { Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-registers',
  templateUrl: './registers.component.html',
  styleUrls: ['./registers.component.css', '../app.component.css']
})
export class RegistersComponent implements OnInit {

  hide = true;

  employee: Employee = new Employee();
  submitted = false;
  
  constructor(private employeeService: EmployeeService,
    private router: Router, private sanitizer: DomSanitizer) { }
    
    
    ngOnInit() {
    }
    
  newEmployee(): void {
    this.submitted = false;
    this.employee = new Employee();
  }

  save() {
   
    this.employeeService
    .createEmployee(this.employee).subscribe(data => {
      console.log(data)
      this.employee = new Employee();
      this.gotoList();
    }, 
    error => console.log(error));
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }

  gotoList() {
    this.router.navigate(['/employees']);
  }  

 
}
