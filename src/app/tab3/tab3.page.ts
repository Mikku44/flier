import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AppModule } from '../app.module';
import {
  doc,
  Firestore,
  getFirestore,
  onSnapshot,
  query,
  collection,
  where,
} from 'firebase/firestore';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
})
export class Tab3Page {
  db: Firestore;
  handlerMessage = '';
  roleMessage = '';
  component = Tab3Page;
  constructor(
    private alertController: AlertController,
    private router: Router
  ) {
    this.db = getFirestore(AppModule.app);
    const q = query(
      collection(this.db, 'files'),
      where('receiver','==', 'test')
    );
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const files = [];
      querySnapshot.forEach((data) => {
        files.push(data.data());
        console.log(data.data());
      });
      console.log('Current files : ', files.join(', '));
    });
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Warning',
      subHeader: '',
      message: 'Do you want to receive file from {other Device}?',
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
}
