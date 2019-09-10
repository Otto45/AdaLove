import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  public currentYear = new Date().getFullYear();

  constructor(private router: Router) {

  }

  public navigateToLanding() {
    this.router.navigate(['/']);
  }

}
