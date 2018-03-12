import {Component, HostListener, OnInit} from "@angular/core";
import {Router} from "@angular/router";

@Component({
  selector: "app-reverse-fizz-buzz",
  templateUrl: "./reverse-fizz-buzz.component.html",
  styleUrls: ["./reverse-fizz-buzz.component.scss"]
})
export class ReverseFizzBuzzComponent {

  answeredWrong = false;
  answer;

  constructor(private router: Router) {
  }

  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (event.key === 'Control' || event.key === 'F12') {
      this.navigateToCheater();
    }

  }

  handleMouseDown($event) {
    if ($event.button === 2) {
      this.navigateToCheater();
    }
  }

  checkAnswer() {
    if (this.answer === '42') {
      this.router.navigateByUrl('caesar');
    } else {
      this.answer = undefined;
      this.answeredWrong = true;
    }
  }

  private navigateToCheater() {
    this.router.navigateByUrl('https://en.wikipedia.org/wiki/Cheating');
  }
}
