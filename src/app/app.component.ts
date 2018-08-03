import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  numberOfRooms = 1;
  numberOfAdults = 1;
  numberOfChildren = 0;

  decrementRooms() {
    if (this.numberOfRooms <= 1) {
      return;
    } else {
      this.numberOfRooms--;
      while ((this.numberOfAdults + this.numberOfChildren) > (this.numberOfRooms * 4)) {
        if (this.numberOfChildren > 0) {
          this.numberOfChildren--;
        } else if (this.numberOfChildren <= 0) {
          this.numberOfAdults--;
        }
      }
    }

  }

  decrementAdults() {
    if (this.numberOfAdults <= 1) {
      return;
    } else if (this.numberOfAdults > this.numberOfRooms) {
      this.numberOfAdults--;
    }
  }

  decrementChildren() {
    if (this.numberOfChildren <= 0) {
      return;
    } else {
      this.numberOfChildren--;
    }
  }

  incrementRooms() {
    if (this.numberOfRooms >= 5) {
      return;
    } else {
      this.numberOfRooms++;
      if (this.numberOfAdults < this.numberOfRooms)
        this.numberOfAdults++;
    }
  }

  incrementAdults() {
    if (this.numberOfAdults + this.numberOfChildren < (this.numberOfRooms * 4)) {
      this.numberOfAdults++;
    }
  }

  incrementChildren() {
    if ((this.numberOfRooms * 4) > (this.numberOfAdults + this.numberOfChildren)) {
      this.numberOfChildren++;
    }
  }
}
