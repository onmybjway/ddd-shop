import {Component, OnInit} from "@angular/core";
import {AuthService} from "../../service/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private loginFailed: boolean = false
  private username: string = "user"
  private password: string = "pwd"

  constructor(private authService: AuthService, private router: Router) {
  }

  ngOnInit() {
  }

  login() {
    this.authService.authenticate(this.username, this.password)
      .subscribe(
        isSuccess => {
          if (isSuccess) {
            this.router.navigateByUrl(this.authService.formUrl ? this.authService.formUrl : "/")
            return
          }

          //
          this.loginFailed = true
        },
        err => {
          console.log(err)
          alert("登录请求失败")
        },
        () => console.log("login complete")
      )
  }
}
