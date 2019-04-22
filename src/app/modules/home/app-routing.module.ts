import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HistoryComponent} from "@app/modules/home/components/historyComponent/history.component";
import { HomeComponent } from "@app/modules/home/components/homeComponent/home.component";

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'history', component: HistoryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
