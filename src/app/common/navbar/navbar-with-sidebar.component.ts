import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../service/auth.service";
import {MemberSummary} from "../../model/member-summary.model";
declare var $:any;

@Component({
  selector: 'app-navbar-with-sidebar',
  templateUrl: './navbar-with-sidebar.component.html',
  styleUrls: ['./navbar-with-sidebar.component.css']
})
export class NavbarWithSidebarComponent implements OnInit {

  currentMember:MemberSummary;

  constructor(private _authService :AuthService) { }

  ngOnInit() {
    $(".button-collapse").sideNav();

    this.currentMember = this._authService.currentMember();
  }

  logout(){
    if(confirm("确认退出吗？")){
      this._authService.clear()
    }
  }

  isAuthenticated():boolean{
    return this._authService.isAuthenticated()
  }

}
