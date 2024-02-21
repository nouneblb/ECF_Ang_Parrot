import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs';

// Définition d'une interface pour les données de réponse du backend
interface AuthResponse {
  token: string;
  roles: string[]; // Définissez ici les types de données attendus pour les rôles
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'http://localhost:8889/api';

  constructor(private http: HttpClient) { }

  //envoie les info d'identification de l'user au backend pour l'authentication
  login(credentials: { email: string; password: string}): Observable<AuthResponse> {
    return this.http.post<AuthResponse>('${this.apiUrl}/login', credentials).pipe(
      tap(response => {
        //stocker le token JWT dans le localStorage
        localStorage.setItem('token', response.token);
        //stocker les info sur les rôles de l'user, si dispo
        localStorage.setItem('roles', JSON.stringify(response.roles));
      })
    );
  }
  
  logout(): void {
    // Effacer le token JWT du localStorage
    localStorage.removeItem('token');
    localStorage.removeItem('roles');
  }

  isAuthenticated(): boolean {
    // Vérifier si le token JWT est présent dans le localStorage (=user actuellement authentifié ou non)
    return !!localStorage.getItem('token');
  }

  getAuthToken(): string | null {
    return localStorage.getItem('token');
  }
}
