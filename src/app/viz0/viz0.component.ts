import { AfterViewInit, Component, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-viz0',
  // templateUrl: './viz1.component.html',
  // styleUrls: ['./viz1.component.css'],
  styles: [''],
  template: `
<section id="DataViz" class="m-0 jumbotron text-center bg-dark text-white">
  <div class="container">
  <h1 class="jumbotron-heading h13d">Data Viz</h1>
  <p class="lead text-muted">Built on Echarts-GL example charts from echarts.baidu.com</p>

  </div>
</section>
<section class="viz-data m-0 jumbotron text-center text-white">

<iframe class="" src="../assets/echarts/dev/geo3D-airline.html" frameborder="0" style="overflow:hidden;overflow-x:hidden;overflow-y:hidden;height:100%;width:100%;" height="100%" width="100%"></iframe>

</section>
<section class="m-0 jumbotron text-center bg-dark  text-white">
  <div class="container">
    <h1 class="jumbotron-heading h13d"></h1>
  </div>
</section>
  `,
})
export class Viz0Component implements AfterViewInit, OnDestroy {
  chartOption: any = {};

  ngAfterViewInit() {

  }

  ngOnDestroy(): void {
  }
}
