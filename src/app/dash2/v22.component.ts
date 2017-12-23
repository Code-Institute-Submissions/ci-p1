import { AfterViewInit, Component, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-v22',
  // templateUrl: './v21.component.html',
  // styleUrls: ['./v21.component.css'],
  template: `
    <div echarts [options]="option" class="viz-chart"></div>
  `,
})
export class V22Component implements AfterViewInit, OnDestroy {
  option: any = {};

  ngAfterViewInit() {

      const echarts: any = {};

      this.option = {
        tooltip : {
            trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        legend: {
            data:['TREND', 'DECLINERS', 'GAINERS']
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis : [
            {
                type : 'value'
            }
        ],
        yAxis : [
            {
                type : 'category',
                axisTick : {show: false},
                // data : ['周一','周二','周三','周四','周五','周六','周日']
                data : ['INTC','AAPL','NVDA','GM','F','MSFT','TSLA']
            }
        ],
        series : [
            {
                name:'TREND',
                type:'bar',
                label: {
                    normal: {
                        show: true,
                        position: 'inside'
                    }
                },
                data:[200, 170, 240, 244, 200, 220, 210]
            },
            {
                name:'GAINERS',
                type:'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true
                    }
                },
                data:[320, 302, 341, 374, 390, 450, 420]
            },
            {
                name:'DECLINERS',
                type:'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'left'
                    }
                },
                data:[-120, -132, -101, -134, -190, -230, -210]
            }
        ]
    };

    //});
  }

  ngOnDestroy(): void {
  }
}
