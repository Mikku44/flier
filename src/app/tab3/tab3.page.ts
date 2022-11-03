import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AppModule } from '../app.module';
import {
  doc,
  updateDoc,
  setDoc,
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
  device: string;
  component = Tab3Page;
  constructor(
    private alertController: AlertController,
    private router: Router
  ) {
    this.db = getFirestore(AppModule.app);
    const q = query(
      collection(this.db, 'files'),
      where('receiver', '==', 'test')
    );
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const files = [];

      querySnapshot.forEach((data) => {
        if (data.data().status === 'not') {
          files.push(data.data().url);
          console.log(data.id);// delete this
          this.device = data.data().sender;
          this.updateData(data.id);

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
      message: 'Do you want to receive file from '+this.device+'?',
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

  async setData(){
    // Add a new document in collection "cities"
    await setDoc(doc(this.db, 'files','ho'), {
      name: 'file.jpg',
      status: 'not',
      receiver: 'test',
      url:'http://localhost.com/file.jpg',
      sender:'sm-001'
    });
  }

  async updateData(document: string){

    const docRef = doc(this.db, 'files', document);
    await updateDoc(docRef, { status: 'yes' });
  }
}
