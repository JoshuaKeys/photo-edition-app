import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ImageCroppedEvent, ImageCropperComponent, ImageTransform } from 'ngx-image-cropper';
import { FileObjectModel } from 'src/app/dtos/file-object.model';

@Component({
  selector: 'app-image-resizer',
  templateUrl: './image-resizer.component.html',
  styleUrls: ['./image-resizer.component.scss']
})
export class ImageResizerComponent implements OnInit {
  imageChangedEvent: any = '';
  isEdit = true
  @ViewChild(ImageCropperComponent, null) imageCropper: ImageCropperComponent;
  @Input('imgEvent') imgEvent: FileObjectModel;
  @Input('clickUrl') clickUrl: string;
  base64Img: string;
  constructor() { }
  imageTransFormObj: ImageTransform = {
    scale: 0,
    rotate: 0,
    flipH: false,
    flipV: false
  };
  ngOnInit() {
    if (this.imgEvent) {
      this.base64Img = this.imgEvent.base64
    }
  }
  toggleEditMode() {
    this.isEdit = !this.isEdit;
  }
  imageCropped(event: ImageCroppedEvent) {
    this.base64Img = event.base64;

  }
  zoomIn() {
    this.imageTransFormObj.scale += 0.1;
    this.imageTransFormObj = { ...this.imageTransFormObj };
  }
  zoomOut() {
    this.imageTransFormObj.scale -= 0.1;
    if (this.imageTransFormObj.scale < 0) {
      this.imageTransFormObj.scale = 0.1;
    }
    this.imageTransFormObj = { ...this.imageTransFormObj };
  }

  commitAdjustment() {
    this.imageCropper.crop();
    this.toggleEditMode()
  }
  fileChangedEvent(event) {
    alert('adfasdf')
    this.imageChangedEvent = event;
  }

}
