import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ClickUploadPage } from './click-upload';

@NgModule({
  declarations: [
    ClickUploadPage,
  ],
  imports: [
    IonicPageModule.forChild(ClickUploadPage),
  ],
})
export class ClickUploadPageModule {}
