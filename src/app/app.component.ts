import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  no_of_rooms = 1;
  no_of_adults = 1;
  no_of_children = 0;

  decrementRooms() {
    if(this.no_of_rooms <= 1)
      return;
    else {
    this.no_of_rooms--;
    while((this.no_of_adults + this.no_of_children) > (this.no_of_rooms*4)){
      if(this.no_of_children>0){
        this.no_of_children --;
      }else if(this.no_of_children <=0){
        this.no_of_adults --;
      }
    }
    }

  }
  decrementAdults() {
    if(this.no_of_adults <= 1)
      return;
    else if(this.no_of_adults > this.no_of_rooms) {
    this.no_of_adults--;
    }
  }
  decrementChildren() {
    if(this.no_of_children <= 0 )
      return;
    else {
      this.no_of_children--;
    }
  }

  incrementRooms() {
    if( this.no_of_rooms >= 5)
    {
      return;
    }
    else {
      this.no_of_rooms++;
      if(this.no_of_adults < this.no_of_rooms)
      this.no_of_adults++;

    }
  }
  incrementAdults() {

     if(this.no_of_adults + this.no_of_children < (this.no_of_rooms*4)){
      this.no_of_adults++;
    }
  }
  incrementChildren() {

    if((this.no_of_rooms * 4) > (this.no_of_adults + this.no_of_children)){
      this.no_of_children++;
    }
  }
}
