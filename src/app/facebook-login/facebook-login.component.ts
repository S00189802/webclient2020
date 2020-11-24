import { Component, OnInit } from '@angular/core';
import * as queryString from 'query-string';

@Component({
  selector: 'app-facebook-login',
  templateUrl: './facebook-login.component.html',
  styleUrls: ['./facebook-login.component.css']
})
export class FacebookLoginComponent implements OnInit {

  facebookLoginUrl: string;
  
  constructor() { }

  ngOnInit(): void {
    const stringifiedParams = queryString.stringify({
      client_id: 1837397963100315,
      redirect_uri: 'https://localhost:8080/authenticate/facebook/',
      scope: ['email', 'user_friends'].join(','), // comma seperated string
      response_type: 'code',
      auth_type: 'rerequest',
      display: 'popup',
    });
    
    this.facebookLoginUrl = `https://www.facebook.com/v4.0/dialog/oauth?${stringifiedParams}`;
  
  }

}
