import { Component } from '@angular/core';
import { NavController, NavParams, ActionSheet } from 'ionic-angular';
import { AlertPage } from '../alert/alert';
import { ActionSheetPage } from '../action-sheet/action-sheet';
import { GridPage } from '../grid/grid';


@Component({
  selector: 'page-exampler',
  templateUrl: 'exampler.html',
})
export class ExamplerPage {
  icons: string[];
  items: Array<{title: string, icon:string, page: any}>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.items = [
      {
        title: 'Alerts',        
        icon: 'flask',
        page: AlertPage
      },
      {
        title: 'ActionSheets',
        icon:  'sheet',
        page:   ActionSheetPage
      },
      {
        title: 'Grid',
        icon: 'build',
        page: GridPage
      }
    ];

  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad ExamplerPage');
  }

  itemTapped(event, item) {
    this.navCtrl.push(item.page)
  }

}
