import {Component, OnInit} from '@angular/core';
import {MemberService} from "../../service/member.service";
import {MemberSummary} from "../../model/member-summary.model";

@Component({
  selector: 'app-me',
  templateUrl: './me.component.html',
  styleUrls: ['./me.component.css']
})
export class MeComponent implements OnInit {

  private _summary: MemberSummary

  constructor(private _memberService: MemberService) {
  }

  ngOnInit() {
    this._memberService.summary().subscribe(data => this._summary = data)
  }
}
