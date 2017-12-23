import { AfterViewInit, Component, OnDestroy } from '@angular/core';
//import * as $ from 'jquery';
//import '../../assets/echarts/map/js/world.js';

@Component({
  selector: 'app-viz4',
  // templateUrl: './viz2.component.html',
  // styleUrls: ['./viz2.component.css'],
  styles: [''],
  template: `
  <section class="m-0 jumbotron text-center bg-dark text-white">
  <div class="container">
  <h1 class="jumbotron-heading h13d">Data 3D</h1>
  <p class="lead text-muted">Built on Echarts-GL example charts from echarts.baidu.com</p>
  </div>
</section>
<section class="viz-data m-0 jumbotron text-center text-white">

<iframe src="../assets/echarts/dev/0-globe-real.html" frameborder="0" style="overflow:hidden;overflow-x:hidden;overflow-y:hidden;height:100%;width:100%;" height="100%" width="100%"></iframe>

</section>
<section class="m-0 jumbotron text-center bg-dark  text-white">
  <div class="container">
    <h1 class="jumbotron-heading h13d"></h1>
  </div>
</section>
  `,
})
export class Viz4Component implements AfterViewInit, OnDestroy {
  option: any = {};
  data: any = {};

  ngAfterViewInit() {

  }

  ngOnDestroy(): void {
  }
}
