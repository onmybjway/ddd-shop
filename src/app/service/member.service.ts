import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {MemberSummary} from "../model/member-summary.model";

import {Http} from "@angular/http";
import {environment} from "../../environments/environment";
import {AuthService} from "./auth.service";

@Injectable()
export class MemberService {

  private _resourceUrl = environment.server + "/member"

  constructor(private _http: Http, private _authService: AuthService) {
  }

  summary(): Observable<MemberSummary> {
    return this._http.get(`${this._resourceUrl}/${this._authService.currentMember.id}/summary`).map(response => response.json() || {})
  }

}
