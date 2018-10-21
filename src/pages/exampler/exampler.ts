import { Component } from '@angular/core';
import { NavController, NavParams, ActionSheet } from 'ionic-angular';
import { AlertPage } from '../alert/alert';
import { ActionSheetPage } from '../action-sheet/action-sheet';
import { GridPage } from '../grid/grid';
import { SelectPage } from '../select/select';
import { SlidePage } from '../slide/slide';
import { SeielPage } from '../seiel/seiel';
import { TabsPage } from '../tabs/tabs';
import { SearchPage} from '../search/search';
import { CardsPage } from '../cards/cards';
import { SegmentPage } from '../segment/segment';

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
        title: 'Grid',
        icon: 'build',
        page: GridPage
      },
      {
        title: 'Select',
        icon:  'bluetooth',
        page:   SelectPage 
      },
      {  
        title: 'Slides',
        icon:  'heart',
        page:   SlidePage       
      },
      {
        title: 'Tabs',        
        icon: 'alarm',
        page: TabsPage
      },
      {
        title: 'Search',        
        icon: 'build',
        page: SearchPage
      },
      {
        title: 'Seiel',
        icon:  'beer',
        page:   SeielPage
      },
      {
        title: 'Cards',
        icon:  'card',
        page:   CardsPage
      },
      {
        title: 'Segment',
        icon:  'more',
        page:   SegmentPage
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
