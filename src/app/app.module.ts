import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { RatingComponent } from "./components/rating/rating.component";
import { UppercasePipe } from "./pipes/uppercase.pipe";
import { CapitalizeDirective } from "./directives/capitalize.directive";
import { HighlightDirective } from "./directives/highlight.directive";

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    RatingComponent,
    UppercasePipe,
    HighlightDirective,
    CapitalizeDirective
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
