import { Component } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';
import {
  doc,
  setDoc,
  updateDoc,
  getFirestore,
  Firestore,
  collection,
  query,
  where,
  onSnapshot,
} from 'firebase/firestore';
import { Device, DeviceInfo } from '@capacitor/device';
import { AppModule } from '../app.module';
import { GetFile } from '../services/file';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  info = Device.getId();
  db: Firestore;
  file: File;
  numOfSent: number;
  numOfRev: number;

  constructor(
    private navCtrl: NavController,
    private toastController: ToastController
  ) {
    this.db = getFirestore(AppModule.app);
    this.setData();
  }

  onFileChange(fileChangeEvent) {
    this.file = fileChangeEvent.target.files[0];
    GetFile.fileCollect(fileChangeEvent);
  }

  downloadPage() {
    this.navCtrl.navigateForward('upload');
  }

  async submitForm() {
    try {
      const formData = new FormData();
      formData.append('files', this.file, this.file.name);
    } catch (e) {
      this.presentToast(e);
    }
  }
  gotoContactPage() {
    this.navCtrl.navigateForward('mycontact');
  }

  async presentToast(error) {
    const toast = await this.toastController.create({
      message:
        '<ion-icon name="rocket-outline"></ion-icon> Flier [' +
        error +
        ']<ion-row class="ion-justify-content-center">You not selected file.</ion-row>',
      duration: 1500,
      position: 'top',
    });

    await toast.present();
  }

  async setData() {
    this.countDataSent();
    this.countDataRev();
    const info = await Device.getId();
    if (this.numOfSent === undefined) {
      this.numOfSent = 0;
    }
    if (this.numOfRev === undefined) {
      this.numOfRev = 0;
    }
    setDoc(doc(this.db, 'users', `${info.uuid}`), {
      numOfSent: this.numOfSent,
      numOfSize: 0,
      numOfSRev: 0,
      numOfRev: this.numOfRev,
      receive: 'off',
    });
  }

  async countDataSent() {
    {
      const info = await Device.getId();
      const q = query(
        collection(this.db, 'files'),
        where('sender', '==', `${info.uuid}`)
      );

      const send = onSnapshot(q, (querySnapshot) => {
        const files = [];
        querySnapshot.forEach((data) => {
          console.log(data.data());
          if (data.data().sender === info.uuid) {
            files.push(data.data());
          }
        });
        this.numOfSent = files.length;
        console.log(this.numOfSent);
        updateDoc(doc(this.db, 'users', `${info.uuid}`), {
          numOfSent: this.numOfSent,
        });
      });
    }
  }
  async countDataRev() {
    const info = await Device.getId();
    const q = query(
      collection(this.db, 'files'),
      where('receiver', '==', `${info.uuid}`)
    );

    onSnapshot(q, (querySnapshot) => {
      querySnapshot.forEach((data) => {
        console.log(data.data());
        this.numOfRev += 1;
      });
       updateDoc(doc(this.db, 'users', `${info.uuid}`), {
         numOfRev: this.numOfRev,
       });
    });
  }
}
