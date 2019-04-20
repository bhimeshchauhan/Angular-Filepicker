import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './pages/home/app.component';
import { UploadButton } from '../../shared/components/button';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UploadButton
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
