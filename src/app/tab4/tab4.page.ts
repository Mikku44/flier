import { Component, OnInit } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { AppModule } from '../app.module';
import { doc, Firestore, getFirestore } from 'firebase/firestore';
import {
  collection,
  addDoc,
  setDoc,
  getDoc,
  getDocFromCache,
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

  constructor() {
    this.db = getFirestore(AppModule.app);
    this.test();
  }

  ngOnInit() {}

  async test() {
    const docRef = doc(this.db, 'users', 'sm-001');
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      const data = docSnap.data();
      this.numOfSize = data.numOfSize;
      this.numOfSent = data.numOfSent;
      this.numOfSent = data.numOfSent;
      this.numOfRev = data.numOfRev;
      this.numOfSRev = data.numOfSRev;
    } else {
      this.numOfSize = 0;
      this.numOfSent =0;
      this.numOfSent = 0;
      this.numOfRev = 0;
      this.numOfSRev = 0;
    }
  }
}
