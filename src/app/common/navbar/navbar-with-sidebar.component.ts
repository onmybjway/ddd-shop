import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../service/auth.service";
declare var $:any;

@Component({
  selector: 'app-navbar-with-sidebar',
  templateUrl: './navbar-with-sidebar.component.html',
  styleUrls: ['./navbar-with-sidebar.component.css']
})
export class NavbarWithSidebarComponent implements OnInit {

  constructor(private authService :AuthService) { }

  ngOnInit() {
    $(".button-collapse").sideNav();
  }

  logout(){
    if(confirm("确认退出吗？")){
      this.authService.clear()
    }
  }

}
