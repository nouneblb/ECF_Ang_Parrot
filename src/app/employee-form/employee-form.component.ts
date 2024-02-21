import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from '../service/employee.service';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrl: './employee-form.component.scss'
})
export class EmployeeFormComponent implements OnInit {
  employeeForm: FormGroup;

  constructor(private fb: FormBuilder, private employeeService: EmployeeService) {
    this.employeeForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
  
    });
  }
  ngOnInit(): void {
    this.employeeForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
  
    });
  }

  onSubmit(): void {
    if (this.employeeForm.valid) {
      this.employeeService.createEmployee(this.employeeForm.value).subscribe(
        () => {
          // Gérer la réussite de la création de l'employé
          console.log('Employé créé avec succès.');
        },
        (error) => {
          // Gérer les erreurs lors de la création de l'employé
          console.error('Erreur lors de la création de l\'employé :', error);
        }
      );
    } else {
      // Afficher des messages d'erreur ou des indications à l'utilisateur sur les champs non valides
    }
  }
}