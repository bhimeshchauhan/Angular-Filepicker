import {Component, OnInit} from "@angular/core";
import {MatDialog} from "@angular/material";
import {DialogComponent} from "@app/modules/home/components/dialog/dialog.component";

@Component({
  selector: 'app-btn',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.styl'],
})

export class HomeComponent implements OnInit{
  constructor(public dialog: MatDialog) {}
  ngOnInit() {}
  openDialog(): void {
    const dialogRef = this.dialog.open(DialogComponent, {
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}

