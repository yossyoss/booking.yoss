import { Component, OnInit } from "@angular/core";
import { Place } from "src/app/place.model";
import { ActivatedRoute } from "@angular/router";
import { NavController } from "@ionic/angular";
import { PlacesService } from "src/app/places.service";

@Component({
  selector: "app-offer-booking",
  templateUrl: "./offer-booking.page.html",
  styleUrls: ["./offer-booking.page.scss"]
})
export class OfferBookingPage implements OnInit {
  place: Place;
  constructor(
    private route: ActivatedRoute,
    private navCtrl: NavController,
    private placesService: PlacesService
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {
      if (!paramMap.has("placeId")) {
        this.navCtrl.navigateBack("/places/tabs/offers");
        return;
      }
      this.place = this.placesService.getPlace(paramMap.get("placeId"));
    });
  }
}
