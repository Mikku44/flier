import { Component } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';
import { doc, setDoc, getFirestore, Firestore} from 'firebase/firestore';
import { AppModule } from '../app.module';
import{GetFile} from '../services/file';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page{
  db: Firestore;
  file: File;
  constructor(
    private navCtrl: NavController,
    private toastController: ToastController
  ) {
    this.db = getFirestore(AppModule.app);
  }

  onFileChange(fileChangeEvent) {
    this.file = fileChangeEvent.target.files[0];
    GetFile.fileCollect(fileChangeEvent);

  }

  downloadPage(){
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
}
