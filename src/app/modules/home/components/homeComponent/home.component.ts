import {Component, OnInit} from "@angular/core";
import {MatDialog, MatDialogConfig} from "@angular/material";
import {DialogComponent} from "@app/modules/home/components/dialog/dialog.component";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.styl'],
})

export class HomeComponent {
  constructor(private dialog: MatDialog) {}

  openDialog(e): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      // width: '250px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log("The dialog was closed.");
    })

  }
}

