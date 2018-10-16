import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, Alert } from 'ionic-angular';

@Component({
  selector: 'page-alert',
  templateUrl: 'alert.html',
})
export class AlertPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public alerCtrl: AlertController) {
  }

  doBasicAlert() {          
    let basicAlert = this.alerCtrl.create({
      title: "Basic alert",
      message: 'Tu amigo Obi wan Kenobi, acaba de aprobar tu solicitud de amistad!',
      buttons: ['Ok']
    });
    basicAlert.present()
  }

  doPromptAlert() {
    let promptAlert = this.alerCtrl.create({
      title: 'Login',
      message: 'Ingrese un nombre',
      inputs: [
        {
        name: 'name',
        placeholder: 'name',
        }
      ],
      buttons:[
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },        
        {          
          text: 'Save',
          handler: data => {
            console.log('Saved clicked');
          }
        }      
      ]
    });
    promptAlert.present();
  }

  doConfirmationAlert() {
    let confirmationAlert = this.alerCtrl.create({
      title: 'Uso del sable de luz',
      message: '¿Está de acuerdo en usar este sable de luz a travez de toda la galaxía?',
      buttons: [
        {
          text: 'No',
          handler: () => {
            console.log('No clicked');
          }
        },
        {
          text: 'Si',
          handler: () => {
            console.log('Si clicked');            
          }
        }
      ]
    });
    confirmationAlert.present();    
  }

  /*ionViewDidLoad() {
    console.log('ionViewDidLoad AlertPage');
  }*/

}
