import { Component } from '@angular/core';

@Component({
  selector: 'app-numeros',
  templateUrl: './numeros.component.html',
  styleUrls: ['./numeros.component.css'],
})
export class NumerosComponent {
  ventasNetas: number = 2567789.5867;
  porcentaje: number = 0.4856;
}
