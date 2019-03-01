import { Component, OnInit } from "@angular/core";
import { Place } from "src/app/place.model";
import { PlacesService } from "src/app/places.service";

@Component({
  selector: "app-offers",
  templateUrl: "./offers.page.html",
  styleUrls: ["./offers.page.scss"]
})
export class OffersPage implements OnInit {
  LoadedPlaces: Place[];
  constructor(private placeService: PlacesService) {}

  ngOnInit() {
    this.LoadedPlaces = this.placeService.places;
  }
}
