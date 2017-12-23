import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { WeatherService } from './weatherdash/weather.service';
import { ChartService } from './chart.service';
import { FormsModule } from '@angular/forms';

import { CarouselModule } from 'ngx-bootstrap';
import { AgmCoreModule } from '@agm/core';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';

import { AngularEchartsModule } from 'ngx-echarts';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CarouselComponent } from './carousel/carousel.component';
import { FooterComponent } from './footer/footer.component';
import { ToolsComponent } from './tools/tools.component';
import { ContactComponent } from './contact/contact.component';
import { MapComponent } from './map/map.component';
import { ParallaxComponent } from './parallax/parallax.component';
import { VideoComponent } from './video/video.component';
import { Egl1Component } from './egl1/egl1.component';
import { Egl2Component } from './egl2/egl2.component';
import { Egl3Component } from './egl3/egl3.component';
import { Egl4Component } from './egl4/egl4.component';
import { Egl5Component } from './egl5/egl5.component';
import { Egl6Component } from './egl6/egl6.component';
import { Iframe1Component } from './iframe1/iframe1.component';
import { Iframe2Component } from './iframe2/iframe2.component';
import { Iframe3Component } from './iframe3/iframe3.component';
import { Iframe4Component } from './iframe4/iframe4.component';
import { D31Component } from './d31/d31.component';
import { D32Component } from './d32/d32.component';
import { D33Component } from './d33/d33.component';
import { D34Component } from './d34/d34.component';
import { D35Component } from './d35/d35.component';
import { D36Component } from './d36/d36.component';
import { V1Component } from './dash/v1.component';
import { V2Component } from './dash/v2.component';
import { V3Component } from './dash/v3.component';
import { V4Component } from './dash/v4.component';
import { V5Component } from './dash/v5.component';
import { V6Component } from './dash/v6.component';
import { V21Component } from './dash2/v21.component';
import { V22Component } from './dash2/v22.component';
import { V23Component } from './dash2/v23.component';
import { V24Component } from './dash2/v24.component';
import { V25Component } from './dash2/v25.component';
import { V26Component } from './dash2/v26.component';
import { V31Component } from './dash3/v31.component';
import { V32Component } from './dash3/v32.component';
import { V33Component } from './dash3/v33.component';
import { V34Component } from './dash3/v34.component';
import { V35Component } from './dash3/v35.component';
import { V36Component } from './dash3/v36.component';
import { ThreeComponent } from './three/three.component';
import { Parallax2Component } from './parallax2/parallax2.component';
import { VrComponent } from './vr/vr.component';
import { Viz0Component } from './viz0/viz0.component';
import { Viz1Component } from './viz1/viz1.component';
import { Viz2Component } from './viz2/viz2.component';
import { Viz3Component } from './viz3/viz3.component';
import { Viz4Component } from './viz4/viz4.component';
import { DashComponent } from './dash/dash.component';
import { Dash2Component } from './dash2/dash2.component';
import { Dash3Component } from './dash3/dash3.component';
import { Parallax1Component } from './parallax1/parallax1.component';
import { AframePipe } from './aframe.pipe';
import { D3Component } from './d3/d3.component';
import { WeatherComponent } from './weather/weather.component';
import { LeafletComponent } from './leaflet/leaflet.component';
import { MaphexComponent } from './maphex/maphex.component';
import { MapgeoComponent } from './mapgeo/mapgeo.component';
import { MaphexiComponent } from './maphexi/maphexi.component';
import { AlgotradeComponent } from './algotrade/algotrade.component';
import { MapheatComponent } from './mapheat/mapheat.component';
import { MapTwitterComponent } from './map-twitter/map-twitter.component';
import { TwitterComponent } from './twitter/twitter.component';
import { WeatherdashComponent } from './weatherdash/weatherdash.component';
import { Chart1Component } from './chart1/chart1.component';
import { Chart2Component } from './chart2/chart2.component';
import { Chart3Component } from './chart3/chart3.component';
import { IexdataComponent } from './iexdata/iexdata.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CarouselComponent,
    FooterComponent,
    ToolsComponent,
    ContactComponent,
    MapComponent,
    ParallaxComponent,
    VideoComponent,
    Egl1Component,
    Egl2Component,
    Egl3Component,
    Egl4Component,
    Egl5Component,
    Egl6Component,
    Iframe1Component,
    Iframe2Component,
    Iframe3Component,
    Iframe4Component,
    D31Component,
    D32Component,
    D33Component,
    D34Component,
    D35Component,
    D36Component,
    V1Component,
    V2Component,
    V3Component,
    V4Component,
    V5Component,
    V6Component,
    V21Component,
    V22Component,
    V23Component,
    V24Component,
    V25Component,
    V26Component,
    V31Component,
    V32Component,
    V33Component,
    V34Component,
    V35Component,
    V36Component,
    ThreeComponent,
    Parallax2Component,
    VrComponent,
    Viz0Component,
    Viz1Component,
    Viz2Component,
    Viz3Component,
    Viz4Component,
    DashComponent,
    Dash2Component,
    Dash3Component,
    Parallax1Component,
    AframePipe,
    D3Component,
    WeatherComponent,
    WeatherdashComponent,
    LeafletComponent,
    MaphexComponent,
    MapgeoComponent,
    MaphexiComponent,
    AlgotradeComponent,
    MapheatComponent,
    MapTwitterComponent,
    TwitterComponent,
    Chart1Component,
    Chart2Component,
    Chart3Component,
    IexdataComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AngularEchartsModule,
    CarouselModule.forRoot(),
    LeafletModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAGhxfPfmOSDG_sKfXS7bzdW1mKzYhAKn8'
    })
  ],
  providers: [ChartService, WeatherService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
