import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'AdaLove';
  public currentYear = new Date().getFullYear();

  public scrollToTop() {
    $("html, body").animate({ scrollTop: 0 }, 600); 
    return false;
  }
}
