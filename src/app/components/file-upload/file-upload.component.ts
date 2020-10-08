import { Component, EventEmitter, Output } from "@angular/core";
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { FileObjectModel } from 'src/app/dtos/file-object.model';

@Component({
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss'],
  selector: 'app-file-upload',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: FileUploadComponent,
      multi: true
    }
  ]
})
export class FileUploadComponent implements ControlValueAccessor {
  registeredOnChange: (base64Str: string) => any;
  @Output('fileChanged') fileChanged = new EventEmitter<FileObjectModel>();

  writeValue(value: any) {

  }
  registerOnChange(fn: () => any) {
    this.registeredOnChange = fn;
  }
  registerOnTouched() {

  }
  onFileChanged(base64: string, event: any) {
    this.fileChanged.emit({ base64, event });
  }
  toBase64(file: File): Promise<any> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
    })
  }
  getFileBlob($event) {
    this.toBase64($event.target.files[0]).then(data => {
      this.registeredOnChange(data)
      this.onFileChanged(data, $event);
    })
  }
}
