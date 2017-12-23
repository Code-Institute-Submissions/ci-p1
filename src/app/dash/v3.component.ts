import { AfterViewInit, Component, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-v3',
  // templateUrl: './v3.component.html',
  // styleUrls: ['./v3.component.css'],
  template: `
    <div echarts [options]="options" class="viz-chart"></div>
  `,
})
export class V3Component implements AfterViewInit, OnDestroy {
  options: any = {};

  ngAfterViewInit() {

      const echarts: any = {};

      this.options = {
        // backgroundColor: echarts.bg,
        backgroundColor: '#95999d',


        // color: [colors.danger, colors.warning],
        tooltip: {},
        legend: {
          data: ['Allocated Budget', 'Actual Spending'],
          textStyle: {
            color: echarts.textColor,
          },
        },
        radar: {
          name: {
            textStyle: {
              color: echarts.textColor,
            },
          },
          indicator: [
            { name: 'Sales', max: 6500 },
            { name: 'Administration', max: 16000 },
            { name: 'Information Techology', max: 30000 },
            { name: 'Customer Support', max: 38000 },
            { name: 'Development', max: 52000 },
            { name: 'Marketing', max: 25000 },
          ],
          splitArea: {
            areaStyle: {
              color: 'transparent',
            },
          },
        },
        series: [
          {
            name: 'Budget vs Spending',
            type: 'radar',
            data: [
              {
                value: [4300, 10000, 28000, 35000, 50000, 19000],
                name: 'Allocated Budget',
              },
              {
                value: [5000, 14000, 28000, 31000, 42000, 21000],
                name: 'Actual Spending',
              },
            ],
          },
        ],
      };
   // });
  }

  ngOnDestroy(): void {
  }
}
