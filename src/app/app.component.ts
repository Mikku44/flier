import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  username: string;
  constructor(private storage: Storage) {}
  async ngOnInit() {
    // If using a custom driver:
    // await this.storage.defineDriver(MyCustomDriver)
    await this.storage.create();

  }
  async setUsername(){
    await this.storage.set('username', this.username);
  }
  async getUsername(){
    const name = await this.storage.get('username');
    return name;
  }
}
