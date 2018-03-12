import {Component, HostListener} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private router: Router) {
  }

  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (event.key === 'Control' || event.key === 'F12') {
      this.navigateToCheater();
    }

  }

  handleMouseDown($event) {
    console.log($event);
    if ($event.button === 2) {
      this.navigateToCheater();
    }
  }

  private navigateToCheater() {
    window.location.href = 'https://en.wikipedia.org/wiki/Cheating';
  }
}
