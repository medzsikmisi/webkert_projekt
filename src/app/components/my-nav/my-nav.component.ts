import {Component, Input} from '@angular/core';
import {faBars, IconDefinition} from "@fortawesome/free-solid-svg-icons";
import {NavigationEnd, Router} from "@angular/router";
import {AuthService} from "../../auth/auth.service";

@Component({
  selector: 'app-my-nav',
  templateUrl: './my-nav.component.html',
  styleUrls: ['./my-nav.component.css']
})
export class MyNavComponent {
  @Input() title='';
  navItems = [
    {name: 'Home', route: '/home'},
    {name: 'Submit value', route: '/submit'},
    {name: 'Logout', route: '/login'}
  ];

  menu: IconDefinition;
  isOpen: boolean;
  currentRoute: string;
  isLoggedIn = false;

  constructor(private router: Router, private auth: AuthService) {
    this.isLoggedIn = auth.isLoggedIn();
    this.currentRoute = '';
    this.isOpen = false;
    this.menu = faBars;
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.currentRoute = event.url.toString();
      }
    });
  }

  logOut() {
    this.auth.logout();
    this.router.navigate(['/login'])
  }
}
