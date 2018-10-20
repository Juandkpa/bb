import { Component } from '@angular/core';
import { NavController, NavParams, ActionSheet } from 'ionic-angular';
import { AlertPage } from '../alert/alert';
import { ActionSheetPage } from '../action-sheet/action-sheet';
import { SelectPage } from '../select/select';
import { TabsPage } from '../tabs/tabs';

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
        icon:  'bluetooth',
        page:   ActionSheetPage
      },
      {
        title: 'Select',
        icon:  'bluetooth',
        page:   SelectPage
      },
      {
        title: 'Tabs',        
        icon: 'alarm',
        page: TabsPage
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
