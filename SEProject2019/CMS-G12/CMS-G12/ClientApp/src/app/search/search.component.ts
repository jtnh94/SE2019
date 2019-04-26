import { Component, OnInit, ViewChild, NgZone } from '@angular/core';
import { MapsAPILoader, AgmMap } from '@agm/core';
import { GoogleMapsAPIWrapper } from '@agm/core/services';
import { Coordinate } from '../Coordinate';

declare var google: any;

interface Location {
  lat: number;
  lng: number;
  viewport?: Object;
  zoom: number;
  marker?: Marker;
}

interface Marker {
  lat: number;
  lng: number;
  label?: string;
  draggable: boolean;
}

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  geocoder: any;
  destinationPoint: string;
  startingPoint: string;

  latCenter: number = 35.658153;
  lngCenter: number = -97.471519;
  zoom: number = 16;

  buildings: Coordinate[] = [
    { "id": 0, "name": 'College of Mathematics & Science', "lat": 35.654065, "lng": -97.472862, "zoom": 17 },
    { "id": 1, "name": 'UCO Baptist Collegiate Ministry', "lat": 35.654379, "lng": -97.474741, "zoom": 17 },
    { "id": 2, "name": 'Mitchell Hall Theatre', "lat": 35.655004, "lng": -97.474131, "zoom": 17 },
    { "id": 3, "name": 'UCO School of Music', "lat": 35.655386, "lng": -97.472671, "zoom": 17 },
    { "id": 4, "name": 'Nigh University Center', "lat": 35.654669, "lng": -97.471360, "zoom": 17 },
    { "id": 5, "name": 'Edmond Fire Department', "lat": 35.653163, "lng": -97.467266, "zoom": 17 },
    { "id": 6, "name": 'Max Chambers Library', "lat": 35.658101, "lng": -97.474048, "zoom": 17 },
    { "id": 7, "name": 'UCO College of Business', "lat": 35.657399, "lng": -97.470779, "zoom": 17 },
    { "id": 8, "name": 'Edmond Area Chamber of Commerce', "lat": 35.653166, "lng": -97.468754, "zoom": 17 },
    { "id": 9, "name": 'College of Fine Arts & Design', "lat": 35.656665, "lng": -97.472716, "zoom": 17 },
    { "id": 10, "name": 'West Hall', "lat": 35.658524, "lng": -97.472395, "zoom": 17 },
    { "id": 11, "name": 'University Apartments', "lat": 35.658194, "lng": -97.475399, "zoom": 17 },
    { "id": 12, "name": "Buddy's", "lat": 35.659286, "lng": -97.471506, "zoom": 17 },
    { "id": 13, "name": 'Wellness Center', "lat": 35.661337, "lng": -97.474234, "zoom": 17 },
    { "id": 14, "name": 'Hamilton Field House', "lat": 35.660195, "lng": -97.471526, "zoom": 17 },
    { "id": 15, "name": 'Wantland Stadium', "lat": 35.661673, "lng": -97.471526, "zoom": 17 },
    { "id": 16, "name": 'Catholic Student Center', "lat": 35.662339, "lng": -97.475226, "zoom": 17 },
    { "id": 17, "name": 'Liberal Arts Building', "lat": 35.656406, "lng": -97.468594, "zoom": 17 },
    { "id": 18, "name": 'Education Building', "lat": 35.657346, "lng": -97.473744, "zoom": 17 },
    { "id": 19, "name": 'Old North', "lat": 35.656748, "lng": -97.473646, "zoom": 17 },
    { "id": 20, "name": 'Evans Hall', "lat": 35.656298, "lng": -97.473809, "zoom": 17 },
    { "id": 21, "name": 'Lillard Administration', "lat": 35.656224, "lng": -97.474298, "zoom": 17 },
    { "id": 22, "name": 'Howell Hall', "lat": 35.654884, "lng": -97.472530, "zoom": 17 },
    { "id": 23, "name": 'Murdaugh Hall', "lat": 35.657325, "lng": -97.472602, "zoom": 17 },
    { "id": 24, "name": 'Communications Building', "lat": 35.657171, "lng": -97.471624, "zoom": 17 },
    { "id": 25, "name": 'Facilities Management', "lat": 35.662341, "lng": -97.473484, "zoom": 17 },
    { "id": 26, "name": 'Thatcher Hall', "lat": 35.655802, "lng": -97.470553, "zoom": 17 },
  ];

  @ViewChild(AgmMap) map: AgmMap;

  constructor(public mapsApiLoader: MapsAPILoader, private zone: NgZone, private wrapper: GoogleMapsAPIWrapper) {
    this.mapsApiLoader = mapsApiLoader;
    this.zone = zone;
    this.wrapper = wrapper;
    this.mapsApiLoader.load().then(() => {
      this.geocoder = new google.maps.Geocoder();
    });
  }

  ngOnInit() {

  }

  createRoute() {

  }
}
