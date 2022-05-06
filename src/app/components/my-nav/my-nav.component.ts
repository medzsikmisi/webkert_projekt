import {Component} from '@angular/core';
import {faBars, IconDefinition} from "@fortawesome/free-solid-svg-icons";
import {NavigationEnd, Router} from "@angular/router";

@Component({
  selector: 'app-my-nav',
  templateUrl: './my-nav.component.html',
  styleUrls: ['./my-nav.component.css']
})
export class MyNavComponent {
  navItems = [
    {name: 'Home', route: '/home'},
    {name: 'Submit value', route: '/submit'},
    {name: 'Logout', route: '/login'}
  ];

  menu: IconDefinition;
  isOpen: boolean;
  currentRoute: string;

  constructor(private router: Router) {
    this.currentRoute = '';
    this.isOpen = false;
    this.menu = faBars;
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.currentRoute = event.url.toString();
      }
    });
  }

}
