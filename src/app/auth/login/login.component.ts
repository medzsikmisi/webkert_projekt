import {Component, OnInit} from '@angular/core';
import {faUnlockKeyhole, IconDefinition} from "@fortawesome/free-solid-svg-icons";
import {Router} from "@angular/router";
import {AuthService} from "../auth.service";
import {FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public faLock: IconDefinition;
  protected authService: AuthService;

  public email: FormControl;
  public password: FormControl;

  constructor(private router: Router, auth: AuthService) {

    this.email = new FormControl('', [Validators.email, Validators.required]);
    this.password = new FormControl('', [Validators.required]);

    this.authService = auth;
    this.faLock = faUnlockKeyhole;
  }

  ngOnInit(): void {
  }

  login() {
    if (!this.email.valid || !this.password.valid) return;
    console.log('valid email and password');
    try {
      this.authService.login(this.email.value, this.password.value).then(() => {
        console.log('successful login')
        this.router.navigate(['/home']);
      });
    } catch (e) {
      alert(e);
      console.log(e);
    }

  }
}
