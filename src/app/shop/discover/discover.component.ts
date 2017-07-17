import { Component, OnInit } from '@angular/core';
declare var $:any

@Component({
  selector: 'app-discover',
  templateUrl: './discover.component.html',
  styleUrls: ['./discover.component.css']
})
export class DiscoverComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('.modal').modal();
  }

}
