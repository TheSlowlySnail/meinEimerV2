import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Town } from '../../models/town.model';
import { ManageDataProvider } from '../../providers/manage-data/manage-data';

/**
 * Generated class for the AbholTerminePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-abhol-termine',
  templateUrl: 'abhol-termine.html'
})
export class AbholTerminePage {
  abholdate: Town[] = [];
  town: string;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public manageData: ManageDataProvider
  ) {}

  ionViewDidLoad() {
    this.town = this.manageData.town.toUpperCase();
    this.manageData.getTownData().then(data => {
      this.abholdate = this.manageData.townArry;
    });
  }
}
