
import { NgModule, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AgmCoreModule } from '@agm/core';

@Component({
  selector: 'app-weather',
  styles: [`
    agm-map {
      height: 400px;
    }
  `],
  template: `
  <agm-map [latitude]="lat" [longitude]="lng"></agm-map>
  `
})
export class WeatherComponent {
  lat: number = -122.478255;
  lng: number = 37.819929;
}
