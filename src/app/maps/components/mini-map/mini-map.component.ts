import { AfterViewInit, Component, Input, ViewChild, ElementRef } from '@angular/core';

import { LngLat, Map, Marker } from 'mapbox-gl';

@Component({
  selector: 'map-mini-map',
  templateUrl: './mini-map.component.html',
  styleUrls: ['./mini-map.component.css']
})
export class MiniMapComponent implements AfterViewInit {
  
  @ViewChild('map')
  public divMap?: ElementRef;

  @Input()
  public lngLat?: number[];

  ngAfterViewInit(): void {
    if( !this.divMap ) throw 'Element HTML not found';
    if( !this.lngLat ) throw "lngLat can't be null";

    const [ lng, lat ] = this.lngLat;
    const coords: LngLat = new LngLat( lng, lat );

    const map = new Map({
      container: this.divMap.nativeElement, // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: coords, // starting position [lng, lat]
      zoom: 15, // starting zoom
      interactive: false
    });

    new Marker()
      .setLngLat( coords )
      .addTo( map )
  }

}
