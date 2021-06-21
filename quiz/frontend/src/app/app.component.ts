import { Component } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  template: '<nav></nav><router-outlet></router-outlet>'
})
export class AppComponent {
  mySubscription;

  constructor(public router: Router, public activatedRoute: ActivatedRoute) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.mySubscription = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // Trick the Router to think it's last link wasn't previously loaded
        this.router.navigated = false;
      }
    });
  }
}
