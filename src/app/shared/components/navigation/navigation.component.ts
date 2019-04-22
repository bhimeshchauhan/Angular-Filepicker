import {Component, OnInit} from '@angular/core';
import {BreakpointObserver, Breakpoints, BreakpointState} from "@angular/cdk/layout";
import {Observable} from "rxjs";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.styl']
})
export class NavigationComponent implements OnInit{
  isHandset: Observable<BreakpointState>;
  constructor(private breakpointObserver: BreakpointObserver) { }
  ngOnInit() {
    this.isHandset = this.breakpointObserver.observe(Breakpoints.Handset);
  }
}
