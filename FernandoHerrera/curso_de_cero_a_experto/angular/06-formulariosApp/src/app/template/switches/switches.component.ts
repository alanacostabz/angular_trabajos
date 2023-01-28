import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styleUrls: ['./switches.component.css'],
})
export class SwitchesComponent {
  @ViewChild('miFormulario') miFormulario!: NgForm;

  persona = {
    genero: '',
    notificaciones: true,
  };

  terminosYCondiciones: boolean = false;

  getTerminosYCondiciones() {
    return this.miFormulario?.controls['terminos']?.errors;
  }
}
