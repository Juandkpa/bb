import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DateTimePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-date-time',
  templateUrl: 'date-time.html',
})

export class DateTimePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DateTimePage');
  }
  Localizacion: string = "n64";
  stpSelect() {
    console.log('STP selected');
  }
  public event = {
    month: '2018-11-01',
    timeStarts: '07:00',
    timeEnds: '2018-11-02'
  }

}

