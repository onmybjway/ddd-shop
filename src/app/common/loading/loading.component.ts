import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css']
})
export class LoadingComponent implements OnInit {

  @Input()
  private data: any

  constructor() {
  }

  ngOnInit() {
  }

  isShow(): boolean {
    return !this.data
  }
}
