import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  schedules = [
    { day: 'Lun - Ven', timeRanges: ['08:00 - 13:00', '14:00 - 20:00'] },
    { day: 'Sam', timeRanges: ['9:00 - 18:00'] },
    { day: 'Dim', closed: true },
  ];
}
