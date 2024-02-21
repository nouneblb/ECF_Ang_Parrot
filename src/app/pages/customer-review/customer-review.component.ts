import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-customer-review',
  templateUrl: './customer-review.component.html',
  styleUrls: ['./customer-review.component.scss']
})

export class CustomerReviewComponent implements OnInit {
  currentDate: string = new Date().toISOString().split('T')[0]; //date actuelle format YYYY-MM-DD
  selectedNote: number = 0; // valeur initial de la note 

  nom: string = '';
  email: string = '';
  message: string = '';

  resetForm() {
    this.nom = '';
    this.email = '';
    this.selectedNote = 0;
    this.message = '';
  }

  avis: any = [];

  constructor(private http: HttpClient) {} //injecter HttpClient dans le constructor

  ngOnInit(): void {
    //requête HTTP pour récupérer les avis clients
    this.getAvis();
  }

  getAvis() {
    //HttpClient pour envoyer une requête GET au backend pour récupérer les avis
    this.http.get<any>('http://localhost:8889/avis').subscribe(
      response => {
        this.avis = response; //stocker les avis récupérer dans la propriété avis
      },
      error => {
        console.log('Erreur lors de la récupération des avis:', error);
      }
    );
  }

  onSubmit() {
    const avisData = {
      nom: this.nom,
      email: this.email,
      date: this.currentDate,
      note: this.selectedNote,
      commentaire: this.message
    };

    //envoi de la requête POST avec les donnees de l'avis au back
    this.http.post('http://localhost:8889/avis', avisData).subscribe({
      next: () => {
        console.log('Avis soumis avec succès.');
        // Rafraîchir la liste des avis après soumission
        this.getAvis();
        // Réinitialiser les champs du formulaire
        this.resetForm();
      },
      error: (error) => {
        console.error('Erreur lors de la soumission de l\'avis:', error);
      }
    });
  }
}