import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

import {
  FileTransfer,
  FileUploadOptions,
  FileTransferObject,
} from '@awesome-cordova-plugins/file-transfer/ngx';
// import { File } from '@awesome-cordova-plugins/file';

@Component({
  selector: 'app-download',
  templateUrl: './download.page.html',
  styleUrls: ['./download.page.scss'],
})
export class DownloadPage implements OnInit {
  handlerMessage = '';
  roleMessage = '';
  // fileTransfer: FileTransferObject = this.transfer.create();
  dataDirectory: string;
  constructor(
    private alertController: AlertController,
    private router: Router,
    // private transfer: FileTransfer,
    // private file: File
  ) {}

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
            this.router.navigate(['/tabs/tab3']);
          },
        },
      ],
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    this.roleMessage = `Dismissed with role: ${role}`;

    // Download a file:
    function downloadFunc() {
      const url = 'http://www.example.com/file.pdf';
      this.fileTransfer.download(url, this.dataDirectory + 'file.pdf').then(
        (entry) => {
          console.log('download complete: ' + entry.toURL());
        },
        (error) => {
          // handle error
        }
      );
    }
    //view more at https://ionicframework.com/docs/native/file-transfer

    // Abort active transfer: cancel
    // this.fileTransfer.abort();
  }

  ngOnInit() {}
}
