import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FileObjectModel } from './dtos/file-object.model';
import { rightToLeft, leftToRight } from './utilities/animtion';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [rightToLeft, leftToRight]
})
export class AppComponent implements OnInit {
  imageEvent: any;
  imageObj: any;
  inputForm: FormGroup;
  fileUrl: string;
  animationStyle: string;
  clickUrl: string;
  title = 'somplo-test';
  ngOnInit() {
    this.inputForm = new FormGroup({
      fileUrl: new FormControl(null, Validators.required),
      clickUrl: new FormControl('', Validators.required),
      animation: new FormControl('ltr', Validators.required)
    })
  }
  onFileChanged(evt: FileObjectModel) {
    this.inputForm.patchValue({ fileUrl: evt.base64 })
    this.imageObj = evt;
  }
  onDropdownChange(evt) {
    this.inputForm.patchValue({
      animation: evt
    })
  }
  onSubmit() {
    this.fileUrl = this.inputForm.value.fileUrl;
    this.animationStyle = this.inputForm.value.animation;
    this.clickUrl = this.inputForm.value.clickUrl;
    this.imageEvent = this.imageObj;
  }
}
