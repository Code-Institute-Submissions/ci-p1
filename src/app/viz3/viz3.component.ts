import { AfterViewInit, Component, OnDestroy } from '@angular/core';
//import * as $ from 'jquery';
import * as data from '../../assets/echarts/ddata/data-1491887968120-rJODPy9ae.json';

@Component({
  selector: 'app-viz3',
  // templateUrl: './viz3.component.html',
  // styleUrls: ['./viz3.component.css'],
  styles: [''],
  template: `<div class="">
<section class="m-0 jumbotron text-center bg-dark text-white">
  <div class="container">
  <h1 class="jumbotron-heading h13d">Data 3D</h1>
  <p class="lead text-muted">Built on Echarts-GL example charts from echarts.baidu.com</p>
  </div>
</section>
<section class="viz-data m-0 jumbotron text-center text-white">
<iframe src="../assets/echarts/dev/mapbox-taxi.html" frameborder="0" style="overflow:hidden;overflow-x:hidden;overflow-y:hidden;height:100%;width:100%;" height="100%" width="100%"></iframe>
</section>
<section class="m-0 jumbotron text-center bg-dark  text-white">
  <div class="container">
    <h1 class="jumbotron-heading h13d"></h1>
  </div>
</section>
  `,
})
export class Viz3Component implements AfterViewInit, OnDestroy {
  option: any = {};

  ngAfterViewInit() {

  }

  ngOnDestroy(): void {
  }
}
