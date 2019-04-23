import {Component, Inject, OnInit} from "@angular/core";
import {MatDialogRef} from "@angular/material";

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.styl'],
})

export class DialogComponent{
  constructor(public dialogRef: MatDialogRef<DialogComponent>) {}
  closeDialog(): void {
    this.dialogRef.close();
  }

}
