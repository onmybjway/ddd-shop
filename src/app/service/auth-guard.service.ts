import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Router, RouterStateSnapshot} from "@angular/router";
import {AuthService} from "./auth.service";

@Injectable()
export class AuthGuard {

  constructor(private authService:AuthService,private router:Router) { }

  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): boolean{

    // let url: string = state.url;

    if(this.authService.authenticated){
      return true
    }

    this.authService.formUrl =  state.url
    this.router.navigateByUrl("/login")
    return false
  }

}
