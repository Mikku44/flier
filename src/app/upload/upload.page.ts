import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { getStorage, ref, uploadBytesResumable } from 'firebase/storage';
import { getApp } from 'firebase/app';
import {
  doc,
  setDoc,
  getFirestore,
  Firestore,
  collection,
} from 'firebase/firestore';
import { AppModule } from '../app.module';
import { GetFile } from '../services/file';
import { getDownloadURL, getMetadata } from 'firebase/storage';
import { NavController, ToastController} from '@ionic/angular';
import { Device } from '@capacitor/device';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.page.html',
  styleUrls: ['./upload.page.scss'],
})
export class UploadPage implements OnInit {
  file: any;
  name: string;
  handlerMessage = '';
  roleMessage = '';
  dataDirectory: string;
  uploadTask: any;
  db = AppModule.db;
  size: number;
  public progress = 0;
  constructor(
    private alertController: AlertController,
    private router: Router,
    private navCtrl: NavController,
    private toastController: ToastController
  ) {
    try {
      this.file = GetFile.file;
      this.name = this.file.name;
      console.log(this.file);
      this.upload();
    } catch (e) {
      this.navCtrl.navigateBack('tabs/tab1');
    }
  }
  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Warning',
      subHeader: '',
      message: 'Do you want to cancel this process?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'alert-button-cancel',
          handler: () => {
            this.handlerMessage = 'Alert cancaled';
            this.uploadTask.cancel();
          },
        },
        {
          text: 'Accept',
          role: 'confirm',
          handler: () => {
            this.router.navigate(['/tabs/tab1']);
          },
        },
      ],
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    this.roleMessage = `Dismissed with role: ${role}`;
  }

  async upload() {
    const firebaseApp = getApp();
    const storage = getStorage(firebaseApp, 'gs://flier-4735f.appspot.com/');
    const storageRef = ref(storage, 'upload/' + this.file.name);
    this.uploadTask = uploadBytesResumable(storageRef, this.file);
    // UploadTask.uploadProgress(uploadTask);
    this.uploadProgress(this.uploadTask);
    this.getMeta(storageRef);

    const url = 'gs://flier-4735f.appspot.com/upload/' + this.file.name;
    this.setData(url);
  }
  async setData( fileRef: string) {
    // Add a new document in collection "cities"
    console.log('this is a size' + this.size);
    const info = await Device.getId();
    await setDoc(doc(this.db, 'files', `${new Date().toDateString()}-${this.file.name}`), {
      name: this.file.name,
      status: 'not',
      receiver: 'test',
      url: fileRef,
      size:this.file.size,
      sender: info.uuid,
    });
  }

  uploadProgress(file) {
    file.on(
      'state_changed',
      (snapshot) => {
        this.progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + this.progress + '% done');
        switch (snapshot.state) {
          case 'paused':
            console.log('Upload is paused');
            break;
          case 'running':
            console.log('Upload is running');
            break;
        }
      },
      (error) => {

      },
      () => {
        // Handle successful uploads on complete
        // For instance, get the download URL: https://firebasestorage.googleapis.com/...
        getDownloadURL(file.snapshot.ref).then((downloadURL) => {
          console.log('File available at', downloadURL);
          this.presentToast();
          this.navCtrl.navigateBack('tabs/tab1');
        });
      }
    );
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message:
        '<ion-icon name="rocket-outline"></ion-icon> Flier <ion-row class="ion-justify-content-center">Upload file success.</ion-row>',
      duration: 1500,
      position: 'top',
    });

    await toast.present();
  }

  async getMeta(url){
    getMetadata(url)
      .then((metadata) => {
        console.log(metadata);
        this.size = metadata.size;
      })
      .catch((error) => {
        // Uh-oh, an error occurred!
      });
  }
  ngOnInit() {}
}
