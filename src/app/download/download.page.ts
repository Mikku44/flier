import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { getStorage, ref, uploadBytesResumable } from 'firebase/storage';
import { getApp } from 'firebase/app';
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
import { AppModule } from '../app.module';
import { GetFile } from '../services/file';
import { getDownloadURL } from 'firebase/storage';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-download',
  templateUrl: './download.page.html',
  styleUrls: ['./download.page.scss'],
})
export class DownloadPage implements OnInit {
  file: File;

  db = AppModule.db;
  public progress = 0;
  constructor(
    private alertController: AlertController,
    private navCtrl: NavController,
    private router: Router
  ) {
    setInterval(() => {
      this.progress += 0.01;

      if (this.progress > 1) {
        setTimeout(() => {
          this.progress = 0;
        }, 1000);
        this.navCtrl.navigateBack('tabs/tab3');
      }
    }, 50);
    try {
      this.fetchData();

      console.log('no error');
    } catch (e) {
      // this.navCtrl.navigateBack('tabs/tab3');
      console.log('error');
    }
  }
  ngOnInit(): void {}
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
            console.log('cancel');
          },
        },
        {
          text: 'Accept',
          role: 'confirm',
          handler: () => {
            this.navCtrl.navigateBack('tabs/tab3');
          },
        },
      ],
    });

    await alert.present();
  }

  async download() {
    const firebaseApp = getApp();
    const storage = getStorage(firebaseApp, 'gs://flier-4735f.appspot.com/');
    const starsRef = ref(storage, `upload/${this.file}`);

    getDownloadURL(starsRef)
      .then((url) => {
        // Insert url into an <img> tag to "download"
        const xhr = new XMLHttpRequest();
        xhr.responseType = 'blob';
        xhr.onload = (event) => {
          const blob = xhr.response;
        };
        xhr.open('GET', url);
        xhr.send();
        console.log(url);
      })
      .catch((error) => {
        switch (error.code) {
          case 'storage/canceled':
            // User canceled the upload
            break;
          case 'storage/unknown':
            // Unknown error occurred, inspect the server response
            break;
        }
      });
  }

  async fetchData() {
    const q = query(
      collection(this.db, 'files'),
      where('receiver', '==', 'test')
    );

    onSnapshot(q, (querySnapshot) => {
      const files = [];

      querySnapshot.forEach((data) => {
        if (data.data().status === 'not') {
          files.push(data.data().name);
          this.file = data.data().name;
          this.download();
          this.updateData(data.id);
        }
      });
      console.log('Current files : ', files.join(', '));
    });
  }

  async updateData(document: string) {
    const docRef = doc(this.db, 'files', document);
    await updateDoc(docRef, { status: 'yes' });
  }
}
