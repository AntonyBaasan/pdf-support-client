import { Component, OnInit, ViewChild } from '@angular/core';
import { NameListService } from '../shared/name-list/name-list.service';
import { RequestOptions, RequestOptionsArgs } from '@angular/http';
import { Http } from '@angular/http';

@Component({
  moduleId: module.id,
  selector: 'sd-fileupload',
  templateUrl: 'fileupload.component.html',
  styleUrls: ['fileupload.component.css'],
})
export class FileUploadComponent implements OnInit {
  public fileList: File[] = [];
  private apiEndPoint: string = 'http://localhost:5000/api/PdfManager/UploadFiles';

  // tslint:disable-next-line:member-ordering
  @ViewChild('fileInput') fileInput: any;
  // tslint:disable-next-line:no-empty
  ngOnInit() {

  }

  constructor(private http: Http) {

  }

  public chooseFile() {
    const fileBrowser = this.fileInput.nativeElement;
    this.fileList.push(fileBrowser.files[0]);

    console.log(this.fileList.length);
  }

  public upload() {
    this.SentFileUplaodRequest(this.fileList);
  }

  private SentFileUplaodRequest(files: File[]) {
    if (files && files.length > 0) {
      const formData = new FormData();

      files.forEach((f, i) => {
        formData.append('file' + i, f);
      });

      const xhr = new XMLHttpRequest();

      // let args: RequestOptionsArgs = {};
      // args.headers['Content-Type'] ='multipart/form-data';

      this.http.post(this.apiEndPoint, formData)
        .map(res => res.json())
        .subscribe((data) => console.log(data));
    }
  }

}
