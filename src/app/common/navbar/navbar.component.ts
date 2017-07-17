import {Component, Input, OnInit} from "@angular/core";
import {Location} from "@angular/common";


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Input("title")
  title: string

  constructor(private location: Location) {
  }

  ngOnInit() {


  }

  goBack(): void {
    this.location.back()
  }
}
