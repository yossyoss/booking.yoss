import { Component, OnInit } from "@angular/core";
import { PlacesService } from "src/app/places.service";
import { Place } from "src/app/place.model";

@Component({
  selector: "app-discover",
  templateUrl: "./discover.page.html",
  styleUrls: ["./discover.page.scss"]
})
export class DiscoverPage implements OnInit {
  LoadedPlaces: Place[];
  constructor(private placeService: PlacesService) {}

  ngOnInit() {
    this.LoadedPlaces = this.placeService.places;
  }
}
