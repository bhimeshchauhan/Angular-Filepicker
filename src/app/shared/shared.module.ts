import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './components/button/button.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import {LayoutModule} from "@angular/cdk/layout";
import {MatButtonModule, MatIconModule, MatListModule, MatSidenavModule, MatToolbarModule} from "@angular/material";
import {BrowserModule} from "@angular/platform-browser";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {RouterLink, RouterModule} from "@angular/router";

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    RouterModule
  ],
  declarations: [ButtonComponent, NavigationComponent],
  exports: [ButtonComponent, NavigationComponent, RouterModule]
})
export class SharedModule {}
