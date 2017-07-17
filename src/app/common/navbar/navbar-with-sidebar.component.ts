import { Component, OnInit } from '@angular/core';
declare var $:any;

@Component({
  selector: 'app-navbar-with-sidebar',
  templateUrl: './navbar-with-sidebar.component.html',
  styleUrls: ['./navbar-with-sidebar.component.css']
})
export class NavbarWithSidebarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(".button-collapse").sideNav();
  }

}
