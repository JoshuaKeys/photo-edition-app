import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DropDownComponent } from './components/drop-down/drop-down.component';
import { ImageCropperModule } from 'ngx-image-cropper';
import { ImageResizerComponent } from './components/image-resizer/image-resizer.component';
import { FileUploadComponent } from './components/file-upload/file-upload.component';

@NgModule({
  declarations: [
    AppComponent,
    DropDownComponent,
    FileUploadComponent,
    ImageResizerComponent
  ],
  imports: [
    BrowserModule,
    ImageCropperModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
