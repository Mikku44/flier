import { Component, OnInit } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { AppModule } from '../app.module';
import { doc, Firestore, getFirestore, onSnapshot } from 'firebase/firestore';

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
  constructor() {
    this.db = getFirestore(AppModule.app);
    this.test();
  }

  ngOnInit() {}

  async test() {
    const docRef = doc(this.db, 'users', 'sm-001');
    onSnapshot(
      doc(this.db, 'users', 'sm-001'),
      { includeMetadataChanges: true },
      (data) => {
        this.numOfSize = data.data().numOfSize;
        this.numOfSent = data.data().numOfSent;
        this.numOfSent = data.data().numOfSent;
        this.numOfRev = data.data().numOfRev;
        this.numOfSRev = data.data().numOfSRev;
        this.percent = (this.numOfSize * 100) / 10240;
      }
    );

  }
}
