import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Sunnyside Agency';

  toggleNav() {
    if (document.getElementById("toggleNav").style.visibility === "hidden") {
      document.querySelector("#toggleNav").style.visibility = "visible";

    } else {
      document.querySelector("#toggleNav").style.visibility = "hidden";
    }
  }


}
