import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { QRCodeModule } from 'angularx-qrcode';
import { DialogToPixHowItWorksDialogComponent, PixQrCodeComponent } from './pix-qrcode.component';

@NgModule({
  declarations: [PixQrCodeComponent, DialogToPixHowItWorksDialogComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatIconModule,
    MatDialogModule,
    QRCodeModule,
    MatGridListModule,
    FlexLayoutModule
  ],
  exports: [PixQrCodeComponent, DialogToPixHowItWorksDialogComponent],
})
export class PixQrCodeModule {}
