import { Component, OnInit } from "@angular/core";
import { PlacesService } from "src/app/places.service";
import { Place } from "src/app/place.model";
import { MenuController } from "@ionic/angular";

@Component({
  selector: "app-discover",
  templateUrl: "./discover.page.html",
  styleUrls: ["./discover.page.scss"]
})
export class DiscoverPage implements OnInit {
  LoadedPlaces: Place[];
  constructor(
    private placeService: PlacesService,
    private menuCtrl: MenuController
  ) {}

  ngOnInit() {
    this.LoadedPlaces = this.placeService.places;
  }
  onOpenMenu() {
    this.menuCtrl.toggle();
  }
}
