import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  private file: File;

  constructor(private navCtrl: NavController
    // private http: HttpClient
    ) {}

  onFileChange(fileChangeEvent){
    this.file = fileChangeEvent.target.files[0];
  }

  async submitForm() {
    // const formData = new FormData();
    // formData.append('photo', this.file, this.file.name);

    // this.http.post('http://localhost:8200/upload',  formData).subscribe((response) =>{
      // console.log(response);
    // });
  }
  gotoContactPage(){
    this.navCtrl.navigateForward('mycontact');
  }
}
