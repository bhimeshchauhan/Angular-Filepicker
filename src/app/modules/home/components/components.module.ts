import {HomeComponent} from "@app/modules/home/components/homeComponent/home.component";
import {HistoryComponent} from "@app/modules/home/components/historyComponent/history.component";
import {NgModule} from "@angular/core";


@NgModule({
  declarations: [HomeComponent,HistoryComponent],
  imports: [],
  exports: [HomeComponent,HistoryComponent]
})
export class ComponentModule { }
