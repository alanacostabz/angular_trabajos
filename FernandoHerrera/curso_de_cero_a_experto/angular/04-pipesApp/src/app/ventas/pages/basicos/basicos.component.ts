import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.css'],
})
export class BasicosComponent {
  nombreLower: string = 'fernanda';
  nombreUpper: string = 'FERNANDO';
  nombreCompleto: string = 'fernanda slaughter';

  fecha: Date = new Date(); // el dia de hoy
}
