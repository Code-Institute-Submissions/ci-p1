
  import { AfterViewInit, Component, OnDestroy } from '@angular/core';

  ///ChartService>>>
  import { ChartService } from "../chart.service";

  @Component({
    selector: "app-chart2",
    // templateUrl: './chart2.component.html',
    // styleUrls: ['./chart2.component.css'],
    ///ChartService>>>
    providers: [ChartService],
    template: `
      <div echarts [options]="option" class="viz-chart"></div>
    `
  })
  export class Chart2Component implements AfterViewInit, OnDestroy {
    option: any = {};
    ///ChartService>>>
    constructor(private _chart: ChartService) {}


    ngAfterViewInit() {

    ///ChartService>>>
    this._chart.chart1y().subscribe(res => {});

    const echarts: any = {};
     // 数据意义：开盘(open)，收盘(close)，最低(lowest)，最高(highest)
var data0 = splitData([
  // ['2013/1/24', 2320.26,2320.26,2287.3,2362.94],



  // ['2013/6/13', 2190.1,2148.35,2126.22,2190.1]
]);


function splitData(rawData) {
  var categoryData = [];
  var values = []
  for (var i = 0; i < rawData.length; i++) {
      categoryData.push(rawData[i].splice(0, 1)[0]);
      values.push(rawData[i])
  }
  return {
      categoryData: categoryData,
      values: values
  };
}

function calculateMA(dayCount) {
  var result = [];
  for (var i = 0, len = data0.values.length; i < len; i++) {
      if (i < dayCount) {
          result.push('-');
          continue;
      }
      var sum = 0;
      for (var j = 0; j < dayCount; j++) {
          sum += data0.values[i - j][1];
      }
      result.push(sum / dayCount);
  }
  return result;
}



this.option = {
  title: {
      text: '上证指数',
      left: 0
  },
  tooltip: {
      trigger: 'axis',
      axisPointer: {
          type: 'line'
      }
  },
  legend: {
      data: ['日K', 'MA5', 'MA10', 'MA20', 'MA30']
  },
  grid: {
      left: '10%',
      right: '10%',
      bottom: '15%'
  },
  xAxis: {
      type: 'category',
      data: data0.categoryData,
      scale: true,
      boundaryGap : false,
      axisLine: {onZero: false},
      splitLine: {show: false},
      splitNumber: 20,
      min: 'dataMin',
      max: 'dataMax'
  },
  yAxis: {
      scale: true,
      splitArea: {
          show: true
      }
  },
  dataZoom: [
      {
          type: 'inside',
          start: 50,
          end: 100
      },
      {
          show: true,
          type: 'slider',
          y: '90%',
          start: 50,
          end: 100
      }
  ],
  series: [
      {
          name: '日K',
          type: 'candlestick',
          data: data0.values,
          markPoint: {
              label: {
                  normal: {
                      formatter: function (param) {
                          return param != null ? Math.round(param.value) : '';
                      }
                  }
              },
              data: [
                  {
                      name: 'XX标点',
                      coord: ['2013/5/31', 2300],
                      value: 2300,
                      itemStyle: {
                          normal: {color: 'rgb(41,60,85)'}
                      }
                  },
                  {
                      name: 'highest value',
                      type: 'max',
                      valueDim: 'highest'
                  },
                  {
                      name: 'lowest value',
                      type: 'min',
                      valueDim: 'lowest'
                  },
                  {
                      name: 'average value on close',
                      type: 'average',
                      valueDim: 'close'
                  }
              ],
              tooltip: {
                  formatter: function (param) {
                      return param.name + '<br>' + (param.data.coord || '');
                  }
              }
          },
          markLine: {
              symbol: ['none', 'none'],
              data: [
                  // [
                  //     {
                  //         name: 'from lowest to highest',
                  //         type: 'min',
                  //         valueDim: 'lowest',
                  //         symbol: 'circle',
                  //         symbolSize: 10,
                  //         label: {
                  //             normal: {show: false},
                  //             emphasis: {show: false}
                  //         }
                  //     },
                  //     {
                  //         type: 'max',
                  //         valueDim: 'highest',
                  //         symbol: 'circle',
                  //         symbolSize: 10,
                  //         label: {
                  //             normal: {show: false},
                  //             emphasis: {show: false}
                  //         }
                  //     }
                  // ],
                  {
                      name: 'min line on close',
                      type: 'min',
                      valueDim: 'close'
                  },
                  {
                      name: 'max line on close',
                      type: 'max',
                      valueDim: 'close'
                  }
              ]
          }
      },
      {
          name: 'MA5',
          type: 'line',
          data: calculateMA(5),
          smooth: true,
          lineStyle: {
              normal: {opacity: 0.5}
          }
      },
      {
          name: 'MA10',
          type: 'line',
          data: calculateMA(10),
          smooth: true,
          lineStyle: {
              normal: {opacity: 0.5}
          }
      },
      {
          name: 'MA20',
          type: 'line',
          data: calculateMA(20),
          smooth: true,
          lineStyle: {
              normal: {opacity: 0.5}
          }
      },
      {
          name: 'MA30',
          type: 'line',
          data: calculateMA(30),
          smooth: true,
          lineStyle: {
              normal: {opacity: 0.5}
          }
      },

  ]
};



      // CHART CODE END // });
    }

    ngOnDestroy(): void {}
  }
