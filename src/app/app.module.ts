import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { NativeStorage } from '@ionic-native/native-storage';
import { ManageDataProvider } from '../providers/manage-data/manage-data';
import { EinstellungenPage } from '../pages/einstellungen/einstellungen';
import { HttpClientModule } from '@angular/common/http';
import { AbholTerminePage } from '../pages/abhol-termine/abhol-termine';

import { MomentModule } from 'ngx-moment';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    EinstellungenPage,
    AbholTerminePage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MomentModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    EinstellungenPage,
    AbholTerminePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    NativeStorage,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ManageDataProvider
  ]
})
export class AppModule {}
