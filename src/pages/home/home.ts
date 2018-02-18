import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class Home {
  public title = "ShouldIGo"
  constructor(public navCtrl: NavController) {

  }

}
