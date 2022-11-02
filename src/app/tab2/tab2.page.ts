import { Component } from '@angular/core';
import { Camera CameraResultType, CameraSource } from '@capacitor/camera';
import { Share } from '@capacitor/share';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  captureImage: any;
  imageSrc: any;
  constructor() { }
  ngOnInit() { }

  async takePicture() {
    const image = await Camera.getPhoto({
      quality: 90,
      source: CameraSource.Camera,
      resultType: CameraResultType.Uri
    })
    this.captureImage = image;
    this.imageSrc = image.webPath;
  }

  async sharePicture(){
    await Share.share({ url: this.captureImage.path });
  }

}
