import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler, ActionSheetController } from 'ionic-angular'; //esta
import { MyApp } from './app.component';

import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { ItemDetailsPage } from '../pages/item-details/item-details';
import { ListPage } from '../pages/list/list';

import { ExamplerPage } from '../pages/exampler/exampler'; 
import { AlertPage } from '../pages/alert/alert';
import { GridPage } from '../pages/grid/grid';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen'; //esta
import { ActionSheetPage } from '../pages/action-sheet/action-sheet';

import { SelectPage } from '../pages/select/select';

@NgModule({
  declarations: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage,
    ExamplerPage,
    AlertPage,
    ActionSheetPage,
    GridPage,
    SelectPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage,
    ExamplerPage,
    AlertPage,
    ActionSheetPage,
    GridPage,
    SelectPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}