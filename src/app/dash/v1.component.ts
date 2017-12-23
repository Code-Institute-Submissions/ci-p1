import { AfterViewInit, Component, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-v1',
  // templateUrl: './v1.component.html',
  // styleUrls: ['./v1.component.css'],
  template: `
    <div echarts [options]="options" class="viz-chart"></div>
  `,
})
export class V1Component implements AfterViewInit, OnDestroy {
  options: any = {};

  ngAfterViewInit() {

      const echarts: any = {};

      this.options = {
        // backgroundColor: echarts.bg,
        backgroundColor: '#95999d',
        // color: [colors.primaryLight],
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow',
          },
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true,
        },
        xAxis: [
          {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
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
            type: 'value',
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
            name: 'Score',
            type: 'bar',
            barWidth: '60%',
            data: [10, 52, 200, 334, 390, 330, 220],
          },
        ],
      };
    //});
  }

  ngOnDestroy(): void {
  }
}
