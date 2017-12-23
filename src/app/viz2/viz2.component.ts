import { AfterViewInit, Component, OnDestroy } from '@angular/core';
// import * as $ from 'jquery';
// import '../../assets/echarts/map/js/world.js';

@Component({
  selector: 'app-viz2',
  // templateUrl: './viz2.component.html',
  // styleUrls: ['./viz2.component.css'],
  styles: [''],
  template: `<div class="">
<section id="Data3D" class="m-0 jumbotron text-center bg-dark text-white">
  <div class="container">
  <h1 class="jumbotron-heading h13d">Data 3D</h1>
  <p class="lead text-muted">Built on Echarts-GL example charts from echarts.baidu.com</p>
  </div>
</section>
<section class="viz-data m-0 jumbotron text-center text-white">
<iframe class="" src="../assets/echarts/dev/globe-flights-real.html" frameborder="0" style="overflow:hidden;overflow-x:hidden;overflow-y:hidden;height:100%;width:100%;" height="100%" width="100%"></iframe>
</section>
<section class="m-0 jumbotron text-center bg-dark  text-white">
  <div class="container">
    <h1 class="jumbotron-heading h13d"></h1>
  </div>
</section>
  `
})
export class Viz2Component implements AfterViewInit, OnDestroy {
  option: any = {};
  data: any = {};

  ngAfterViewInit() {
    this.option = {
      backgroundColor: '#000',
      globe: {
        baseTexture: '../assets/echarts/ddata/data-1491890179041-Hkj-elqpe.jpg',
        heightTexture:
          '../assets/echarts/ddata/data-1491889019097-rJQYikcpl.jpg',

        displacementScale: 0.1,

        shading: 'lambert',

        environment: '../assets/echarts/ddata/data-1491837999815-H1_44Qtal.jpg',

        light: {
          ambient: {
            intensity: 0.1
          },
          main: {
            intensity: 1.5
          }
        },

        layers: [
          {
            type: 'blend',
            blendTo: 'emission',
            texture: '../assets/echarts/ddata/data-1491890291849-rJ2uee5ag.jpg'
          },
          {
            type: 'overlay',
            texture: '../assets/echarts/ddata/data-1491890092270-BJEhJg96l.png',
            shading: 'lambert',
            distance: 5
          }
        ]
      },
      series: []
    }
  }

  ngOnDestroy(): void {}
}
