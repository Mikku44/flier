import { Component, OnInit } from '@angular/core';
import { AppModule } from '../app.module';
import { doc, Firestore, getFirestore, onSnapshot } from 'firebase/firestore';
import { Device, DeviceInfo } from '@capacitor/device';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {
  db: Firestore;
  numOfSent: number;
  numOfSize: number;
  numOfRev: number;
  numOfSRev: number;
  percent: number;
  uid: string;
  name: string;

  constructor(private navCtrl: NavController) {
    this.db = getFirestore(AppModule.app);
    this.test();
  }

  ngOnInit() {}

  async test() {
    const info = await Device.getId();
    const name = await Device.getInfo();
    this.uid = info.uuid;
    this.name = name.name;
    onSnapshot(
      doc(this.db, 'users', this.uid),
      { includeMetadataChanges: true },
      (data) => {
        console.log(this.uid);
        console.log(data.data());
        this.numOfSize = data.data().numOfSize;
        this.numOfSent = data.data().numOfSent;
        this.numOfSent = data.data().numOfSent;
        this.numOfRev = data.data().numOfRev;
        this.numOfSRev = data.data().numOfSRev;
        this.percent = (this.numOfSize * 100) / 10240;
      }
    );
  }
  gotoContactPage() {
    this.navCtrl.navigateForward('mycontact');
  }
}
