import { Component} from '@angular/core';

@Component({
  selector: 'blog-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent {
  lat = 50.460304;
  lng = 30.382310;
  zoom = 12;
}
