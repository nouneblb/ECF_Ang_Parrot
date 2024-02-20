import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CarsService } from '../../service/cars.service';

@Component({
  selector: 'app-cars-details',
  templateUrl: './cars-details.component.html',
  styleUrl: './cars-details.component.scss'
})
export class CarsDetailsComponent implements OnInit {
  car: any; 
  contactForm: FormGroup; 
  currentImageIndex: number = 0;


  constructor(private route: ActivatedRoute, private carsService: CarsService, private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
    });
  } 
  
  ngOnInit(): void {
    // observer les changements de paramètres de route
    this.route.params.subscribe(params => {

    // récuperer l'Id du véhicule depuis l'url
    const carId = params['id'];
    console.log('Car ID from URL:', carId);
    // utiliser le service.ts pour récuperer les détails du véhicule selon l'id 
    this.car = this.carsService.getCarDetails(carId);
    }); 
  }

  nextImage() {
    this.currentImageIndex = (this.currentImageIndex + 1) % this.car.image.length;
  }
  
  prevImage() {
    this.currentImageIndex = (this.currentImageIndex - 1 + this.car.image.length) % this.car.image.length;
  }

  submitForm() {
    if (this.contactForm.valid) {
      // soumission du form 
      console.log('Formulaire soumis avec succès!', this.contactForm.value);
    }
  }
}
