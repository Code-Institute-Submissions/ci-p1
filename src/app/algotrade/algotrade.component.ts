import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-algotrade',
  template: `

    <section class="m-0 jumbotron text-center bg-dark text-white">
    <div class="container">
    <h1 class="jumbotron-heading h13d">Algo Trading / Backtesting</h1>
    <p class="lead text-muted">Zipline / Pyfolio / Backtrader (Example Chart)</p>

    </div>
    </section>
    <section class="viz-map m-0 p-0 jumbotron text-center text-white">

 <!-- <iframe src="../assets/leaflet/hexbin/xhex.html" frameborder="0" style="margin:0;overflow:hidden;overflow-x:hidden;overflow-y:hidden;height:600px;width:100%;" height="600px" width="100%"></iframe> -->
    <img src="../assets/algo/Figure_0.png" frameborder="0" style="margin:0;overflow:hidden;overflow-x:hidden;overflow-y:hidden;height:600px;width:100%;" height="600px" width="100%">

    </section>
    <section class="m-0 jumbotron text-center bg-dark  text-white">
    <div class="container">
      <h1 class="jumbotron-heading h13d"></h1>
    </div>
    </section>

    `,
  styleUrls: ['./algotrade.component.css']
})
export class AlgotradeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
