import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  avis: any[] = [ ];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getAvis();
  }

  getAvis() {
    this.http.get<any[]>('http://localhost:8889/avis').subscribe(
      response => {
        this.avis = response;
      },

      error => {
        console.log('Erreur lors de la récupération des avis :', error);
      }
    );
  }
}
