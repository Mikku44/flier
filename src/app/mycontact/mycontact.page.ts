import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-mycontact',
  templateUrl: './mycontact.page.html',
  styleUrls: ['./mycontact.page.scss'],
})
export class MycontactPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  gotoPrevPage(){
    this.navCtrl.navigateBack('tabs');
  }

}
