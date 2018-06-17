import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ManageDataProvider } from '../../providers/manage-data/manage-data';

/**
 * Generated class for the EinstellungenPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-einstellungen',
  templateUrl: 'einstellungen.html'
})


export class EinstellungenPage {

  selectedTown: string = "gutach";

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public managaData: ManageDataProvider
  ) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad EinstellungenPage');
  }

  async structurMethodes() {
    console.log(this.selectedTown);
    await this.managaData.saveTown(this.selectedTown);
    await this.managaData.loadTown();
    await this.managaData.getTownData();
  }
}
