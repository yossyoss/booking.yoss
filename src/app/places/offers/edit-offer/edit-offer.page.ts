import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { NavController } from "@ionic/angular";
import { PlacesService } from "src/app/places.service";
import { Place } from "src/app/place.model";

@Component({
  selector: "app-edit-offer",
  templateUrl: "./edit-offer.page.html",
  styleUrls: ["./edit-offer.page.scss"]
})
export class EditOfferPage implements OnInit {
  place: Place;
  constructor(
    private route: ActivatedRoute,
    private navCtrl: NavController,
    private placesService: PlacesService
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {
      if (!paramMap.has("placeId")) {
        this.navCtrl.navigateBack(["/", "places", "tabs", "offers"]);
        return;
      }
      this.place = this.placesService.getPlace(paramMap.get("placeId"));
    });
  }
}
