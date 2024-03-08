import { Component, OnInit, Input } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Clipboard } from '@angular/cdk/clipboard';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-pix-qrcode',
  templateUrl: './pix-qrcode.component.html',
  styleUrls: ['./pix-qrcode.component.scss'],
})
export class PixQrCodeComponent implements OnInit {
  constructor(
    public dialog: MatDialog,
    private clipboard: Clipboard,
    private _snackBar: MatSnackBar
  ) {}

  @Input() data = '';
  @Input() msgErro? = '';

  ngOnInit(): void {}

  public onOpenModal(): void {
    this.dialog.open(DialogToPixHowItWorksDialogComponent);
  }

  public onCopyPixCode(): void {
    this.clipboard.copy(this.data);
    this._snackBar.openFromComponent(CopyPixCodeConfirmComponent, {
      duration: 5000,
    });
  }
}

@Component({
  selector: 'app-pix-how-it-works.dialog',
  templateUrl: 'pix-how-it-works.dialog.html',
  styleUrls: ['./pix-qrcode.component.scss'],
})
export class DialogToPixHowItWorksDialogComponent {
  constructor(public dialogRef: MatDialogRef<PixQrCodeComponent>) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}

@Component({
  selector: 'app-snack-bar-component-pix-code.html',
  templateUrl: 'snack-bar-component-pix-code.html',
  styles: [
    `
      * {
        color: #fff;
        font-weight: 500;
        font-size: 14px
      }
    `,
  ],
})
export class CopyPixCodeConfirmComponent {}
