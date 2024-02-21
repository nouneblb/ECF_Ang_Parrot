import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-manage-review',
  templateUrl: './manage-review.component.html',
  styleUrls: ['./manage-review.component.scss']
})

export class ManageReviewComponent {
  avis: any = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    // Récupérer les avis clients depuis le backend lors de l'initialisation du composant
    this.getAvis();
  }

  getAvis() {
    // Récupérer les avis clients depuis le backend
    this.http.get<any>('http://localhost:8889/avis').subscribe(
      response => {
        this.avis = response; // Stocker les avis récupérés dans la propriété avis
      },
      error => {
        console.log('Erreur lors de la récupération des avis:', error);
      }
    );
  }

  deleteAvis(id: number) {
    // Supprimer un avis en envoyant une requête DELETE au backend
    this.http.delete(`http://localhost:8889/avis/${id}`).subscribe({
      next: () => {
        console.log('Avis supprimé avec succès.');
        // Rafraîchir la liste des avis après suppression
        this.getAvis();
      },
      error: (error) => {
        console.error('Erreur lors de la suppression de l\'avis:', error);
      }
    });
  }

  publishAvis(id: number) {
    // Envoi de la requête PUT ou PATCH avec l'ID de l'avis au backend pour le publier
    this.http.put(`http://localhost:8889/avis/${id}/publish`, {}).subscribe({
      next: () => {
        console.log('Avis publié avec succès.');
        // Rafraîchir la liste des avis après publication
        this.getAvis();
      },
      error: (error) => {
        console.error('Erreur lors de la publication de l\'avis:', error);
      }
    });
  }
}
