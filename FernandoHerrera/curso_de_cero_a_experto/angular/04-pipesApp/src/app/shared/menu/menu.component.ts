import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  items: MenuItem[] = [
    {
      label: 'Pipes de Angular',
      icon: 'pi pi-desktop',
      items: [
        {
          label: 'Textos y Fechas',
          icon: 'pi pi-align-left',
          routerLink: '/',
        },
        {
          label: 'Números',
          icon: 'pi pi-dollar',
          routerLink: 'numeros',
        },
        {
          label: 'No comúnes',
          icon: 'pi pi-globe',
          routerLink: 'no-comunes',
        },
      ],
    },
    {
      label: 'Pipes personalizados',
      icon: 'pi pi-cog',
      routerLink: 'ordenar',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
