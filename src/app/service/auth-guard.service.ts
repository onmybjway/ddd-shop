import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Router, RouterStateSnapshot} from "@angular/router";
import {AuthService} from "./auth.service";

@Injectable()
export class AuthGuard {

  constructor(private _authService:AuthService,private _router:Router) { }

  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): boolean{

    // let url: string = state.url;

    if(this._authService.isAuthenticated()){
      return true
    }

    this._authService.formUrl =  state.url
    this._router.navigateByUrl("/login")
    return false
  }

}
