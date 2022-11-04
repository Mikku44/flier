
export class GetFile {
  static file: any;
  constructor(){}
  static fileCollect(fileChangeEvent) {
    this.file = fileChangeEvent.target.files[0];
  }

}
