import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { doc, addDoc, collection, Firestore } from 'firebase/firestore';
import { AppModule } from '../app.module';
@Component({
  selector: 'app-mycontact',
  templateUrl: './mycontact.page.html',
  styleUrls: ['./mycontact.page.scss'],
})
export class MycontactPage implements OnInit {
  db = AppModule.db;
  constructor(private navCtrl: NavController) {}

  ngOnInit() {}

  gotoPrevPage() {
    this.navCtrl.navigateBack('tabs');
  }
  gotoContactPage(title: string) {
    this.setData(title);
    this.navCtrl.navigateBack('send-file');
  }

  async setData(detail) {
    await addDoc(collection(this.db, 'contact'), {
      date: new Date(),
      detail,
    });
  }
}
