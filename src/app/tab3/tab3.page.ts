import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AppModule } from '../app.module';
import {
  doc,
  updateDoc,
  Firestore,
  getFirestore,
  onSnapshot,
  query,
  collection,
  where,
} from 'firebase/firestore';

import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
})
export class Tab3Page {
  db: Firestore;
  handlerMessage = '';
  roleMessage = '';
  user = 'test';
  device: string;
  component = Tab3Page;
  constructor(
    private alertController: AlertController,
    private router: Router,
    private navCtrl: NavController
  ) {
    this.db = getFirestore(AppModule.app);
    const q = query(
      collection(this.db, 'files'),
      where('receiver', '==', this.user)
    );

    onSnapshot(q, (querySnapshot) => {
      const files = [];

      querySnapshot.forEach((data) => {
        if (data.data().status === 'not') {
          files.push(data.data().name);
          console.log(data.id); // delete this
          this.device = data.data().sender;
        }
      });
      console.log('Current files : ', files.join(', '));
      if (files.length > 0) {
        this.presentAlert();
      }
    });
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Warning',
      subHeader: '',
      message: 'Do you want to receive file from ' + this.device + '?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'alert-button-cancel',
          handler: () => {
            this.handlerMessage = 'Alert cancaled';
          },
        },
        {
          text: 'Accept',
          role: 'confirm',
          handler: () => {
            this.router.navigate(['/download']);
          },
        },
      ],
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    this.roleMessage = `Dismissed with role: ${role}`;
  }
  async downloadPage() {
    this.router.navigate(['/download']);
  }
  gotoContactPage() {
    this.navCtrl.navigateForward('mycontact');
  }
}
