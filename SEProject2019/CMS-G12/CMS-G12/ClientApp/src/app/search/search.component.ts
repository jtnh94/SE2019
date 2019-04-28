import { Component, OnInit, ViewChild, NgZone, ViewChildren, QueryList } from '@angular/core';
import { MapsAPILoader, AgmMap } from '@agm/core';
import { GoogleMapsAPIWrapper } from '@agm/core/services';
import { Coordinate } from '../Coordinate';

declare var google: any;

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  geocoder: any;

  pointA: Coordinate = {
    name: "",
    lat: 0.0,
    lng: 0.0
  };
  pointB: Coordinate = {
    name: "",
    lat: 0.0,
    lng: 0.0
  };

  point1: Object = {
    lat: 0.0,
    lng: 0.0
  };
  point2: Object = {
    lat: 0.0,
    lng: 0.0
  };

  starting: string;
  end: string;

  latCenter: number = 35.658153;
  lngCenter: number = -97.471519;
  zoom: number = 16;

  directionsRequest: any;
  travelMode: string;

  buildings: Coordinate[] = [
    { "name": 'College of Mathematics & Science', "lat": 35.654065, "lng": -97.472862},
    { "name": 'UCO Baptist Collegiate Ministry', "lat": 35.654379, "lng": -97.474741},
    { "name": 'Mitchell Hall Theatre', "lat": 35.655004, "lng": -97.474131},
    { "name": 'UCO School of Music', "lat": 35.655386, "lng": -97.472671},
    { "name": 'Nigh University Center', "lat": 35.654669, "lng": -97.471360},
    { "name": 'Edmond Fire Department', "lat": 35.653163, "lng": -97.467266},
    { "name": 'Max Chambers Library', "lat": 35.658101, "lng": -97.474048},
    { "name": 'UCO College of Business', "lat": 35.657399, "lng": -97.470779},
    { "name": 'Edmond Area Chamber of Commerce', "lat": 35.653166, "lng": -97.468754},
    { "name": 'College of Fine Arts & Design', "lat": 35.656665, "lng": -97.472716},
    { "name": 'West Hall', "lat": 35.658524, "lng": -97.472395},
    { "name": 'University Apartments', "lat": 35.658194, "lng": -97.475399},
    { "name": "Buddy's", "lat": 35.659286, "lng": -97.471506},
    { "name": 'Wellness Center', "lat": 35.661337, "lng": -97.474234},
    { "name": 'Hamilton Field House', "lat": 35.660195, "lng": -97.471526},
    { "name": 'Wantland Stadium', "lat": 35.661673, "lng": -97.471526},
    { "name": 'Catholic Student Center', "lat": 35.662339, "lng": -97.475226},
    { "name": 'Liberal Arts Building', "lat": 35.656406, "lng": -97.468594},
    { "name": 'Education Building', "lat": 35.657346, "lng": -97.473744},
    { "name": 'Old North', "lat": 35.656748, "lng": -97.473646},
    { "name": 'Evans Hall', "lat": 35.656298, "lng": -97.473809},
    { "name": 'Lillard Administration', "lat": 35.656224, "lng": -97.474298},
    { "name": 'Howell Hall', "lat": 35.654884, "lng": -97.472530},
    { "name": 'Murdaugh Hall', "lat": 35.657325, "lng": -97.472602},
    { "name": 'Communications Building', "lat": 35.657171, "lng": -97.471624},
    { "name": 'Facilities Management', "lat": 35.662341, "lng": -97.473484},
    { "name": 'Thatcher Hall', "lat": 35.655802, "lng": -97.470553},
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
    this.travelMode = 'WALKING';

  }

  createRouteFromSearch(_starting: string, _end: string) {
    this.starting = _starting;
    this.end = _end;

    var directionsService = new google.maps.DirectionsService;
    var directionsDisplay = new google.maps.DirectionsRenderer;

    for (let i = 0; i < this.buildings.length; i++) {
      if (this.buildings[i].name == this.starting) {
        this.pointA.name = this.buildings[i].name;
        this.pointA.lat = this.buildings[i].lat;
        this.pointA.lng = this.buildings[i].lng;
        this.point1 = new google.maps.LatLng({ lat: this.buildings[i].lat, lng: this.buildings[i].lng });
        break;
      }
      else { }
    }
    for (let j = 0; j < this.buildings.length; j++) {
      if (this.buildings[j].name == this.end) {
        this.pointB.name = this.buildings[j].name;
        this.pointB.lat = this.buildings[j].lat;
        this.pointB.lng = this.buildings[j].lng;
        this.point2 = new google.maps.LatLng({ lat: this.buildings[j].lat, lng: this.buildings[j].lng });
        break;
      }
      else { }
    }

    console.log(this.pointA);
    console.log(this.pointB);
  
    this.directionsRequest = {
      origin: { lat: this.pointA.lat, lng: this.pointA.lng },
      destination: { lat: this.pointB.lat, lng: this.pointB.lng },
      travelMode: google.maps.TravelMode.WALKING
    };
    
    directionsService.route(this.directionsRequest, function (result, status) {
      if (status === google.maps.DirectionsStatus.OK) {
        directionsDisplay.setDirections(result);
      }
      else { alert('Unable to route') };
    });
  }
}
