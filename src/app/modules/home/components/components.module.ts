import {HomeComponent} from "@app/modules/home/components/homeComponent/home.component";
import {HistoryComponent} from "@app/modules/home/components/historyComponent/history.component";
import {NgModule} from "@angular/core";
import {DialogComponent} from "@app/modules/home/components/dialog/dialog.component";
import {MatDialogModule} from "@angular/material";


@NgModule({
  declarations: [ DialogComponent],
  imports: [],
  exports: [ DialogComponent]
})
export class ComponentModule { }
