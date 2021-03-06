import { AfterViewInit, Component, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-v6',
  // templateUrl: './v6.component.html',
  // styleUrls: ['./v6.component.css'],
  template: `
    <div echarts [options]="options" class="viz-chart"></div>
  `,
})
export class V6Component implements AfterViewInit, OnDestroy {
  options: any = {};


  ngAfterViewInit() {
    // this.themeSubscription = this.theme.getJsTheme().subscribe(config => {
      const xAxisData = [];
      const data1 = [];
      const data2 = [];

      // const colors: any = config.variables;
      // const echarts: any = config.variables.echarts;
      const echarts: any = {};

      this.options = {
        backgroundColor: echarts.bg,
        // color: [colors.primaryLight, colors.infoLight],
        legend: {
          data: ['bar', 'bar2'],
          align: 'left',
          textStyle: {
            color: echarts.textColor,
          },
        },
        xAxis: [
          {
            data: xAxisData,
            silent: false,
            axisTick: {
              alignWithLabel: true,
            },
            axisLine: {
              lineStyle: {
                color: echarts.axisLineColor,
              },
            },
            axisLabel: {
              textStyle: {
                color: echarts.textColor,
              },
            },
          },
        ],
        yAxis: [
          {
            axisLine: {
              lineStyle: {
                color: echarts.axisLineColor,
              },
            },
            splitLine: {
              lineStyle: {
                color: echarts.splitLineColor,
              },
            },
            axisLabel: {
              textStyle: {
                color: echarts.textColor,
              },
            },
          },
        ],
        series: [
          {
            name: 'bar',
            type: 'bar',
            data: data1,
            animationDelay: function(idx) {
              return idx * 10;
            },
          },
          {
            name: 'bar2',
            type: 'bar',
            data: data2,
            animationDelay: function(idx) {
              return idx * 10 + 100;
            },
          },
        ],
        animationEasing: 'elasticOut',
        animationDelayUpdate: function(idx) {
          return idx * 5;
        },
      };

      for (let i = 0; i < 100; i++) {
        xAxisData.push('Category ' + i);
        data1.push((Math.sin(i / 5) * (i / 5 - 10) + i / 6) * 5);
        data2.push((Math.cos(i / 5) * (i / 5 - 10) + i / 6) * 5);
      }
   // });
  }

  ngOnDestroy(): void {
  }
}
