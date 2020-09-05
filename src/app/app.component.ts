import { Component } from '@angular/core';
import * as firebase from 'firebase';

const config ={
  apiKey: '',
  databaseURL: '' 
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'thims';

  constructor() {
    firebase.initializeApp(config);
  }
}
