import {Component, OnInit} from '@angular/core';
// import * as $ from 'jquery';
declare var $:any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // template:'<router-outlet></router-outlet>',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  ngOnInit(): void {

    $(".button-collapse").sideNav();

  }

}
