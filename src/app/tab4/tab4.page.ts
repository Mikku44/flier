import { Component, OnInit } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { AppModule } from '../app.module';
import { doc, Firestore, getFirestore } from 'firebase/firestore';
import { collection, addDoc, setDoc, getDoc } from 'firebase/firestore';
@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {
  db: Firestore;
  constructor() {
    this.db = getFirestore(AppModule.app);


  }

  ngOnInit() {}

  async test(){
    console.log('test');
    const docRef = doc(this.db, 'cities', 'SF');
    const citiesRef = collection(this.db, 'cities');
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log('Document data:', docSnap.data());
    } else {
      // doc.data() will be undefined in this case
      console.log('No such document!');
    }
  }


}
