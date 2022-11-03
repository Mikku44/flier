import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-send-file',
  templateUrl: './send-file.page.html',
  styleUrls: ['./send-file.page.scss'],
})
export class SendFilePage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  gotoPrevPage(){
    this.navCtrl.navigateRoot('tabs');
  }
}
