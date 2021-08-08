import { Component } from '@angular/core';
import posthog from 'posthog-js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'posthog-repro';

  constructor(){
    posthog.init('');
  }
}
