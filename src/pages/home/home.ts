import { Component } from "@angular/core";
import { NavController } from "ionic-angular";
import { BinanceApiClient } from "binance-api-client";

const client1 = new BinanceApiClient("", "");

@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  constructor(public navCtrl: NavController) {
    client1.getAccountData().then(res => {
      console.log(res);
    });
  }
}
