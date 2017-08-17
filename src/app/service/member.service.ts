import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {MemberSummary} from "../model/member-summary.model";

import {Http} from "@angular/http";

@Injectable()
export class MemberService {

  constructor(private _http: Http) {
  }

  summary(): Observable<MemberSummary> {
    return this._http.get("http://localhost:8001/member/summary").map(response => response.json() || {})
  }

}
