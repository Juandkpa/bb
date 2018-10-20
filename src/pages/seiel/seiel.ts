import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SeielPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-seiel',
  templateUrl: 'seiel.html',
})
export class SeielPage {
  icons: string[];
  users:Array<{user: string}>;
  following:Array<{name: any}>;
  numF:number;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.following=[];
    let ayy
    this.users = [
      {
        user:'juandi'
      },
      {
        user:'dañel'
      },
      {
        user:'margara'
      }  
    ];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SeielPage');
  }
  val(f){
    let ayy = this.following.filter(function(item){
      return item.name === f;
    });
    return ayy;
  }
  follow(event, f) {
    if(this.val(f).length==0){
      this.following.push({"name":f});
      this.numF = this.following.length;
    }
  }
}
