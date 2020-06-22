import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;
  pipeDemoWord = "hello pipe demo";

  onRating(event){
        console.log("rating triggered in parent",event);
  }
}
