import {Component, Inject, OnInit} from "@angular/core";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.styl'],
})

export class DialogComponent implements OnInit{
  files:object;
  constructor(public dialogRef: MatDialogRef<DialogComponent>, @Inject(MAT_DIALOG_DATA) data) {
    this.files = data;
  }

  ngOnInit(){
  }

  closeDialog(): void {
    this.dialogRef.close();
  }
  uploadFile(): void {
    this.dialogRef.close();
  }
}
