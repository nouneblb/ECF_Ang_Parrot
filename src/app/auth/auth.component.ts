import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { Employee } from '../employe-interface/employee.interface';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent {
  email = '';
  password = '';
  roles: string[] = [];
  employee: Employee | null = null;

  constructor(private authService: AuthService) {}

  login() {
    this.authService.login({ email: this.email, password: this.password}).subscribe
    (response => {
          // Gérer la réponse et récupérer le rôle de l'utilisateur
          if (response && response.roles) {
            this.roles = response.roles;
            // utiliser le rôle pour afficher les fonctionnalités correspondantes
          } else {
            console.error('Le rôle de l\'utilisateur n\'a pas été renvoyé dans la réponse.');
          }
        },
        error => {
          console.error('Une erreur s\'est produite lors de la tentative de connexion :', error);
        }
    );
  }

  // Méthode pour obtenir les autorisations spécifiques à un employé en fonction des rôles
  private getEmployeeRole(roles: string[]): Employee | null {
    // Vérifiez si l'utilisateur a le rôle d'employé
    const isEmployee = roles.includes('ROLE_EMPLOYEE');
    // Si l'utilisateur est un employé, retournez les autorisations spécifiques à un employé
    if (isEmployee) {
      return {
        manageReviews: true, // Autorisation pour gérer les avis
        manageVehicles: true // Autorisation pour ajouter/supprimer des véhicules d'occasion
      };
    } else {
      return null; // Si l'utilisateur n'est pas un employé, retournez null
    }
  }

}
