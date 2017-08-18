import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {MemberSummary} from "../model/member-summary.model";

import {Http} from "@angular/http";
import {environment} from "../../environments/environment";

@Injectable()
export class MemberService {

  private _resourceUrl = environment.server + "/member"

  constructor(private _http: Http) {
  }

  summary(): Observable<MemberSummary> {
    return this._http.get(`${this._resourceUrl}/summary}`).map(response => response.json() || {})
  }

}
