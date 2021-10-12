import { Component } from '@angular/core';
import * as firebase from 'firebase';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor() {
    var config = {

      apiKey: "AIzaSyAFndMw2XIKnNjeh9CDrb5U_2Omu3tcMQ4",
    
      authDomain: "books-724f8.firebaseapp.com",
    
      projectId: "books-724f8",
    
      storageBucket: "books-724f8.appspot.com",
    
      messagingSenderId: "498463506617",
    
      appId: "1:498463506617:web:7c15ae8bb7b492ce949b68",
    
      measurementId: "G-B6KW2ED40Q"
    
    };
    
    
    // Initialize Firebase
    
    firebase.initializeApp(config);
    
  }
}
