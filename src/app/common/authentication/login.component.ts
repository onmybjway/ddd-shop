import {Component, OnInit} from "@angular/core";
import {AuthService} from "../../service/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginFailed: boolean = false
  username: string = "member1"
  password: string = "pwd"

  constructor(private authService: AuthService, private router: Router) {
  }

  ngOnInit() {
  }

  login() {
    this.authService.authenticate(this.username, this.password)
      .subscribe(isSuccess => {
          if (isSuccess) this.router.navigateByUrl(this.authService.fromUrl);

          this.loginFailed = !isSuccess
        }
      )
  }
}
