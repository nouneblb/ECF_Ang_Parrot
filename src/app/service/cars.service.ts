import { Injectable } from "@angular/core";


@Injectable({
    providedIn: 'root',
})

export class CarsService {
    private occasionCars = [
        { id: 1, title: 'Ford Ranger Raptor', price: 55400, year: 2023, mileage: 20000, fuel: 'Diesel', image: ['assets/ford.jpg', 'assets/carousel2.jpg', 'assets/carousel3.jpg' ], brand: 'Ford', gearbox: 'auto', door: '5', color: 'gris'},
        { id: 2, title: 'Audi Sportback 45', price: 44500, year: 2021, mileage: 23000, fuel: 'Hybride', image: ['assets/audisportback.jpg', 'assets/carousel2.jpg', 'assets/carousel3.jpg'] , brand: 'Audi', gearbox: 'auto', door: '5', color: 'noir'},
        { id: 3, title: 'Golf 5 Volkswagen', price: 26460, year: 2021, mileage: 98000, fuel: 'Diesel', image: ['assets/volkswagen.jpg', 'assets/carousel2.jpg', 'assets/carousel3.jpg'], brand: 'Golf', gearbox: 'manuelle', door: '5', color: 'blanche'},
        { id: 4, title: 'Opel Corsa ', price: 22340, year: 2020, mileage: 133000, fuel: 'Diesel', image: ['assets/opelcorsa.jpg', 'assets/carousel2.jpg', 'assets/carousel3.jpg'], brand: 'Opel', gearbox: 'manuelle', door: '5', color:'noir'},
        { id: 5, title: 'Ford Fiesta', price: 21750, year: 2011, mileage: 98000, fuel: 'Essence', image: ['assets/fordfiesta.jpg', 'assets/carousel2.jpg', 'assets/carousel3.jpg'], brand: 'Ford', gearbox: 'manuelle', door: '5', color:'gris'},
        { id: 6, title: 'Fiat 500', price: 19320, year: 2019, mileage: 55200, fuel: 'Diesel', image: ['assets/fiat 500.jpg', 'assets/carousel2.jpg', 'assets/carousel3.jpg'], brand: 'Fiat', gearbox:'manuelle', door: '3', color: 'rouge'},
        { id: 7, title: 'Renault Clio IV', price: 16440, year: 2019, mileage: 70000, fuel: 'Essence', image: ['assets/clio.jpg', 'assets/carousel2.jpg', 'assets/carousel3.jpg'], brand: 'Renault', gearbox: 'manuelle', door: '3', color: 'noir'},
        { id: 8, title: 'Renault Clio II', price: 15600, year: 2017, mileage: 90000, fuel: 'Essence', image: ['assets/renaultclio.jpg', 'assets/carousel2.jpg', 'assets/carousel3.jpg'], brand: 'Renault', gearbox: 'manuelle', door: '5', color: 'gris'},
        { id: 9, title: 'Peugeot 208', price: 12980, year: 2011, mileage: 100000, fuel: 'Diesel', image: ['assets/peugeot208.jpg', 'assets/carousel2.jpg', 'assets/carousel3.jpg'], brand: 'Peugeot', gearbox: 'manuelle', door: '5', color: 'blanche'},
    ];

    constructor() {}

    getAllCars(): any [] {
        return this.occasionCars;
    }

    getCarDetails(carId: number): any {
        // rechercher la voiture avec Id correspondant
        console.log('Getting details for Car ID:', carId);
        const car = this.occasionCars.find((c) => c.id == carId);

        if (car) {
            console.log('Car details found:', car);
            return car;
        } else {
            // si jamais le véhicule n'est pas trouver retourner une valeur par défaut
            console.log('Car details not found for ID:', carId);
            return null;
        }
    }
}