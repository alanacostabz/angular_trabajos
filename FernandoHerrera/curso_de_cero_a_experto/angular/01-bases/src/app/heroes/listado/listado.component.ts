import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css'],
})
export class ListadoComponent {
  heroes: string[] = ['spiderman', 'ironman', 'hulk', 'thor'];
  heroeBorrado: string = '';

  borrarHeroe() {
    console.log('borrando...');
    this.heroeBorrado = this.heroes.shift() || '';

    console.log(this.heroeBorrado);
  }
}
