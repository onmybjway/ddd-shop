import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Router, RouterStateSnapshot} from "@angular/router";
import {AuthService} from "./auth.service";

@Injectable()
export class AuthGuard {

  constructor(private _authService: AuthService, private _router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): boolean {

    // let url: string = state.url;

    if (this._authService.isAuthenticated()) {
      return true
    }

    // this._authService.fromUrl = state.url
    // this._router.navigateByUrl("/login")
    this.gotoLogin(state.url)
    return false
  }

  /*
  when fromurl is empty or null then set fromurl=current url
   */
  gotoLogin(fromUrl: string) {
    this._authService.fromUrl = fromUrl ? fromUrl : this._router.url;
    this._router.navigateByUrl("/login")
  }
}
