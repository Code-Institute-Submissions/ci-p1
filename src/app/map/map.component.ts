import { Component } from '@angular/core';

import { icon, latLng, Layer, marker, tileLayer } from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  // `<div class="map" leaflet [leafletOptions]="options"></div>`,

  styleUrls: ['./map.component.css']
})
export class MapComponent {

          options = {
            layers: [
              // tileLayer('http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}', {
                // subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],

              tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                maxZoom: 20,
                detectRetina: true
              })
            ],
            zoom: 14,
            center: latLng([ 37.8, -122.478255 ])
          };

}
