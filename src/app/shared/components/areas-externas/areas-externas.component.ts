import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-areas-externas',
  templateUrl: './areas-externas.component.html',
  styleUrls: ['./areas-externas.component.scss']
})
export class AreasExternasComponent implements OnInit {

  public menu: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  dragMenu() {
    this.menu = !this.menu;
  }

}
