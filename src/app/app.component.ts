import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Sunnyside Agency';

  toggleNav() {
    if ((document.getElementById("toggleNav") as HTMLElement).style.visibility === "hidden") {
      (document.querySelector("#toggleNav") as HTMLElement).style.visibility = "visible";

    } else {
      (document.querySelector("#toggleNav") as HTMLElement).style.visibility = "hidden";
    }
  }


}
