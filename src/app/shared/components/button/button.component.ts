import {Component, Input, OnInit} from "@angular/core";

@Component({
  selector: 'app-btn',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.styl'],
})

export class ButtonComponent implements OnInit{
  @Input() name: string;
  constructor() {}
  ngOnInit() {}
}
