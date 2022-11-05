import { Component, OnInit } from '@angular/core';
import { AppModule } from '../app.module';
import { Device, DeviceInfo } from '@capacitor/device';
import { NavController } from '@ionic/angular';
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
        this.getSize();
        this.getRev();
        this.numOfSize = data.data().numOfSize;
        this.numOfSent = data.data().numOfSent;
        this.numOfSent = data.data().numOfSent;
        this.numOfRev = data.data().numOfRev;
        this.numOfSRev = data.data().numOfSRev;

      }
    );
  }
  gotoContactPage() {
    this.navCtrl.navigateForward('mycontact');
  }

  async getSize() {
    const q = query(
      collection(this.db, 'files'),
      where('sender', '==', this.uid)
    );

    onSnapshot(q, (querySnapshot) => {
      querySnapshot.forEach((data) => {
        this.numOfSize += data.data().size / 10000;
        this.percent = (this.numOfSize * 100) / 1024;
      });
      console.log('Current files : ', this.numOfSize);
    });
  }

  async getRev() {
    const q = query(
      collection(this.db, 'files'),
      where('receiver', '==', this.uid)
    );
    const amount = [];

    onSnapshot(q, (querySnapshot) => {
      querySnapshot.forEach((data) => {
        amount.push(data.data().name);
        this.numOfSRev += data.data().size/10000;
      });
      console.log('files : ', this.numOfRev);
      this.numOfRev = amount.length;

    });
  }
}
