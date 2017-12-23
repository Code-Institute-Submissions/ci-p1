import { AfterViewInit, Component, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-v2',
  // templateUrl: './v21.component.html',
  // styleUrls: ['./v21.component.css'],
  template: `
    <div echarts [options]="option" class="viz-chart"></div>
  `,
})
export class V2Component implements AfterViewInit, OnDestroy {
  option: any = {};

  ngAfterViewInit() {

      const echarts: any = {};

      this.option = {
        tooltip : {
            formatter: "{a} <br/>{b} : {c}%"
        },
        toolbox: {
            feature: {
                restore: {},
                saveAsImage: {}
            }
        },
        series: [
            {
                name: '业务指标',
                type: 'gauge',
                detail: {formatter:'{value}%'},
                data: [{value: 50, name: '完成率'}]
            }
        ]
    };
    //});
  }

  ngOnDestroy(): void {
  }
}
