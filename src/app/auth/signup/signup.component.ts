import {Component, OnInit} from '@angular/core';
import {faUserPlus, IconDefinition} from "@fortawesome/free-solid-svg-icons";

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

  constructor() {
    this.userPlus = faUserPlus;
  }

  ngOnInit(): void {
  }

  signUp(email: string, password: string, password2: string) {

    this.errors.anyError = this.errors.anyError || this.checkEmail(email);
    this.errors.anyError = this.errors.anyError || this.checkPassword(password);
    this.errors.anyError = this.errors.anyError || this.checkPassword2(password2);
    this.errors.anyError = this.errors.anyError || this.checkMatching(password, password2);
    if (this.errors.anyError) {
      return;
    }
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
      this.errors.password2Error = true;
    }
    return this.errors.password2Error;
  }

  checkMatching(password: string, password2: string) {
    if (password.trim() !== password2.trim()) {
      this.errors.anyError = true;
      this.errors.differentPasswords = true;
    } else {
      this.errors.differentPasswords = true;
    }
    return this.errors.differentPasswords;
  }
}
