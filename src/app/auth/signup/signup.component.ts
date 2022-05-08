import {Component, OnInit} from '@angular/core';
import {faUserPlus, IconDefinition} from "@fortawesome/free-solid-svg-icons";
import {AuthService} from "../auth.service";
import {Router} from "@angular/router";
import {FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  public userPlus: IconDefinition;
  public errors = {
    anyError: false,
    emailError: false,
    passwordError: false,
    password2Error: false,
    differentPasswords: false
  };
  email: FormControl;
  password: FormControl;
  password2: FormControl;
  private auth: AuthService;

  constructor(auth: AuthService, private router: Router) {
    this.email = new FormControl('', [Validators.email, Validators.required]);
    this.password = new FormControl('', [Validators.required]);
    this.password2 = new FormControl('', [Validators.required]);
    this.auth = auth;
    this.userPlus = faUserPlus;
  }

  ngOnInit(): void {
  }

  signUp() {
    this.errors.anyError = false;
    this.errors.anyError = this.errors.anyError || this.checkEmail(this.email.value);
    this.errors.anyError = this.errors.anyError || this.checkPassword(this.password.value);
    this.errors.anyError = this.errors.anyError || this.checkPassword2(this.password2.value);
    this.errors.anyError = this.errors.anyError || this.checkMatching(this.password.value, this.password2.value);
    if (this.errors.anyError) {
      console.log('signup error, wrong values');
      console.log(this.errors);
      return;
    }
    this.auth.signUp(this.email.value, this.password.value).then(() => {
      this.router.navigate(['/home']);
    });
  }

  checkEmail(email: string) {
    if (email.trim().length == 0) {
      this.errors.anyError = true;
    } else {
      this.errors.emailError = false;
    }
    return this.errors.emailError;
  }

  checkPassword(password: string) {
    if (password.trim().length == 0) {
      this.errors.anyError = true;
      this.errors.passwordError = true;
    } else {
      this.errors.passwordError = false;
    }
    return this.errors.passwordError;
  }

  checkPassword2(password2: string) {
    if (password2.trim().length == 0) {
      this.errors.anyError = true;
      this.errors.password2Error = true;
    } else {
      this.errors.password2Error = false;
    }
    return this.errors.password2Error;
  }

  checkMatching(password: string, password2: string) {
    if (password.trim() !== password2.trim()) {
      this.errors.anyError = true;
      this.errors.differentPasswords = true;
    } else {
      this.errors.differentPasswords = false;
    }
    return this.errors.differentPasswords;
  }
}
