import {Component} from "@angular/core";
import {MatDialog} from "@angular/material";
import {DialogComponent} from "@app/modules/home/components/dialog/dialog.component";
import { HttpClient } from '@angular/common/http';
import _ from 'underscore';

@Component({
  selector: 'app-home',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.styl'],
})

export class HomepageComponent {
  constructor(private dialog: MatDialog,
              private http: HttpClient) { this.readData(); }


  readData(): void{
    this.http.get('assets/files.txt', { responseType: 'text' })
      .subscribe(data => {
        let fileData = data.split("\n");
        fileData.pop();
        console.log(fileData);

      this.arrangeIntoTree(fileData, function(tree) {
        // tree.forEach((item) => {
          console.log(tree)
        // })
      });
    });
  }

  arrangeIntoTree(paths, cb): void {
    var tree = [];

    // This example uses the underscore.js library.
    _.each(paths, function(path) {

      var pathParts = path.split('/');
      pathParts.shift(); // Remove first blank element from the parts array.

      var currentLevel = tree; // initialize currentLevel to root

      _.each(pathParts, function(part) {

        // check to see if the path already exists.
        var existingPath = _.findWhere(currentLevel, {
          name: part
        });

        if (existingPath) {
          // The path to this item was already in the tree, so don't add it again.
          // Set the current level to this path's children
          currentLevel = existingPath.children;
        } else {
          var newPart = {
            name: part,
            children: [],
          };
          currentLevel.push(newPart);
          currentLevel = newPart.children;
        }
      });
    });

    cb(tree);
  }




  openDialog(): void {

    const dialogRef = this.dialog.open(DialogComponent, {
      width: '550px',
      height: '550px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log("The dialog was closed.");
    })

  }
}

