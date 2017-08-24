import {Component, OnInit} from "@angular/core";
import {AuthService} from "../../service/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string
  password: string

  constructor(private authService: AuthService, private router: Router) {
  }

  ngOnInit() {
  }

  login() {
    this.authService.authenticate(this.username, this.password)
      .subscribe(isSuccess => {
          if (isSuccess) this.router.navigateByUrl(this.authService.fromUrl);

        }
        , err => {
          if (err.data && err.data.status == 400) {
            alert("验证失败，错误的用户名密码");
            return
          }

          throw err
        }
      )
  }
}
