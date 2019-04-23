import {HomepageComponent} from "@app/modules/home/components/homepageComponent/homepage.component";
import {HistoryComponent} from "@app/modules/home/components/historyComponent/history.component";
import {NgModule} from "@angular/core";
import {DialogComponent} from "@app/modules/home/components/dialog/dialog.component";
import {MatButtonModule, MatDialogModule} from "@angular/material";


@NgModule({
  declarations: [DialogComponent],
  imports: [MatDialogModule, MatButtonModule],
  exports: [DialogComponent]
})
export class ComponentModule { }
