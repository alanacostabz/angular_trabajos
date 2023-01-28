import { Component, OnInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-full-screen',
  templateUrl: './full-screen.component.html',
  styleUrls: ['./full-screen.component.css'],
})
export class FullScreenComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    const map = new mapboxgl.Map({
      container: 'mapa', // container ID
      style: 'mapbox://styles/mapbox/streets-v11', // style URL
      center: [-110.96420518674651, 29.020871217878057], // Longitud - Latitud
      zoom: 18,
    });
  }
}
