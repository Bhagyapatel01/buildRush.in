import { Component } from '@angular/core';

@Component({
  selector: 'app-root',  // Selector to use this component in HTML
  templateUrl: 'app.component.html',  // Path to the HTML template
  styleUrls: ['app.component.css']  // Path to the CSS file for styling
})
export class AppComponent {
  title = 'Angular App';  // A sample property to display in the template
}
