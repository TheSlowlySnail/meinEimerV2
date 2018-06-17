import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ManageDataProvider } from '../../providers/manage-data/manage-data';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {
  jsondata;
  constructor(
    public navCtrl: NavController,
    public managaData: ManageDataProvider
  ) {

  }
  ngOnInit(): void {

  }


}
