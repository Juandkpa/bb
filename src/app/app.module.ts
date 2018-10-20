import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';

import { IonicApp, IonicModule, IonicErrorHandler, ActionSheetController, Slide } from 'ionic-angular';
import { MyApp } from './app.component';

import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { ItemDetailsPage } from '../pages/item-details/item-details';
import { ListPage } from '../pages/list/list';

import { ExamplerPage } from '../pages/exampler/exampler'; 
import { AlertPage } from '../pages/alert/alert';
import { GridPage } from '../pages/grid/grid';
import { SlidePage }    from '../pages/slide/slide';
import {TabsPage} from '../pages/tabs/tabs';
import { Page1Page } from '../pages/page1/page1';
import { Page2Page } from '../pages/page2/page2';
import { Page3Page } from '../pages/page3/page3'; 

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen'; //esta
import { ActionSheetPage } from '../pages/action-sheet/action-sheet';
import { SeielPage } from '../pages/seiel/seiel';

import { SelectPage } from '../pages/select/select';

import { SearchPage } from '../pages/search/search';

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
    SelectPage,
    SlidePage,
    ExamplerPage, //esta
    AlertPage,    //esta
    ActionSheetPage, //esta
    SelectPage,
    TabsPage,
    Page1Page,
    Page2Page,
    Page3Page,
    SearchPage,
    SeielPage
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
    SelectPage,
    SlidePage,
    ExamplerPage, //esta
    AlertPage,    //esta
    ActionSheetPage, //esta
    SelectPage,
    TabsPage,
    Page1Page,
    Page2Page,
    Page3Page,
    SearchPage,
    SeielPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}