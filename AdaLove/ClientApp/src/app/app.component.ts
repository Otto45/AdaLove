import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public currentYear = new Date().getFullYear();

  constructor(private router: Router){

  }

  public navigateToLanding() {
    this.router.navigate(['/']);
  }
}
