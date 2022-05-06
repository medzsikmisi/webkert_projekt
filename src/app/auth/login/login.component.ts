import {Component, OnInit} from '@angular/core';
import {faUnlockKeyhole, IconDefinition} from "@fortawesome/free-solid-svg-icons";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public faLock: IconDefinition;

  constructor(private router: Router) {
    this.faLock = faUnlockKeyhole;
  }

  ngOnInit(): void {
  }

  login() {
    this.router.navigate(['/home'])
  }
}
