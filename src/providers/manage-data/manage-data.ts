import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NativeStorage } from '@ionic-native/native-storage';
import { Town } from '../../models/town.model';
import moment from 'moment';

/*
  Generated class for the ManageDataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ManageDataProvider {
  jsonArray: any;
  townArry: Town[] = [];
  objectView = [];

  town: string;

  constructor(public nativeStorage: NativeStorage, public http: HttpClient) {}

  async saveTown(town) {
    await this.nativeStorage
      .setItem('town', town)
      .then(
        () => console.log('Stored item!'),
        error => console.error('Error storing item', error)
      );
  }

  async loadTown() {
    await this.nativeStorage.getItem('town').then(
      data => {
        console.log(data);
        this.town = data;
        console.log('loadTown() Town: ' + this.town);
      },
      error => console.error(error)
    );
  }

  async getTownData() {
    console.log('Stadt ' + this.town);

    await this.http.get('assets/' + this.town + '.json').subscribe(data => {
      this.jsonArray = data;

      console.log(data);
      for (let obj of this.jsonArray) {
        debugger;
        console.log(obj);
        let town: Town = new Town(
          obj['LOCATION'],
          moment(obj['DTEND;VALUE=DATE']).toDate(),
          obj['SUMMARY']
        );
        if (moment(town['notificationDate']).isSameOrAfter(moment())) {
          this.townArry.push(town);
        }
      }
    });
    console.log(this.townArry);
  }

  public getJsonView() {
    this.getTownData();

    //console.log(data)
    //console.log(this.jsonResult[0]);
    for (let obj of this.jsonArray) {
      debugger;
      console.log(obj);
    }
  }
}
