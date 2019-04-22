import {Component, Inject, OnInit} from "@angular/core";
import {MatDialogRef} from "@angular/material";
import {MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-btn',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.styl'],
})

export interface DialogData {
  animal: string;
  name: string;
}

export class DialogComponent implements OnInit{
  constructor(public dialogRef: MatDialogRef<DialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: DialogData) {}
  ngOnInit() {}

}
