import { Component, OnInit } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { Share } from '@capacitor/share';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
  capturedImage: any;
  imageSrc: any;

  constructor() { }

  ngOnInit() { }

  async takePicture() {
    const image = await Camera.getPhoto({
      quality: 90,
      source: CameraSource.Camera,
      resultType: CameraResultType.Uri
    });
    this.capturedImage = image;
    this.imageSrc = image.webPath;
  }

  async sharePicture() {
    await Share.share({ url: this.capturedImage.path });
  }


}
