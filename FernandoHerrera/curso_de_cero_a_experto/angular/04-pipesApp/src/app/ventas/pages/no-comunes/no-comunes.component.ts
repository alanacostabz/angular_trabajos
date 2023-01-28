import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styleUrls: ['./no-comunes.component.css'],
})
export class NoComunesComponent {
  // i18nSelect
  nombre: string = 'Fernanda';
  genero: string = 'femenino';
  invitacionMapa = {
    masculino: 'invitarla',
    femenino: 'invitarla',
  };

  // i18nPlural
  clientes: string[] = ['Maria', 'Fernanda', 'Alan'];
  clientesMapa = {
    '=0': 'no tenemos ningun cliente esperando',
    '=1': 'tenemos un cliente esperando',
    '=2': 'tenemos 2 clientes esperando',
    other: 'tenemos # clientes esperando',
  };

  cambiarCliente() {
    this.nombre = 'Alan';
    this.genero = 'masculino';
  }

  borrarCliente() {
    this.clientes.pop();
  }

  // KeyValue Pipe
  persona = {
    nombre: 'Fernanda',
    edad: 35,
    direccion: 'Ottawa, Canada',
  };

  // JsonPipe
  heroes = [
    {
      nombre: 'Gokú',
      vuela: true,
    },
    {
      nombre: 'Batman',
      vuela: false,
    },
    {
      nombre: 'Oliver Atom',
      vuela: false,
    },
  ];

  // Async Pipe
  miObservable = interval(1000); // 0,1,2,3,4,5,6

  valorPromesa = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos data de promesa');
    }, 3500);
  });
}
