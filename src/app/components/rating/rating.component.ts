import {Component, OnInit, Input, EventEmitter, Output} from "@angular/core";

@Component({
  selector:"rating",
  templateUrl:"./rating.component.html",
  styleUrls:['./rating.component.css']
})
export class RatingComponent implements OnInit {

  @Input() totalStars = 0;
  @Input() rating = 0;

  @Output() 
  onRating = new EventEmitter()
  starArray  = [];

  ngOnInit(){
    this.starArray = Array(this.totalStars
).fill(0, this.totalStars
);

  }
  onRatingEvent(rating){
    this.rating = rating+1;
    this.onRating.emit(rating+1);
  }
}