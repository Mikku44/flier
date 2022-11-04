import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedataService {
  sharedData: any;
  constructor() { }

  setSharedData(data: any){
    this.sharedData = data;
  }

  getSharedData(){
    return this.sharedData;
  }
}
