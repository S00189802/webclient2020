import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

declare const FB: any // to work with the Facebook JS 

@Injectable({
  providedIn: 'root'
})
export class UserService {

  //code taken from https://dev.to/nileshsanyal/implementing-oauth2-social-login-with-facebook-part-2-2pee

  constructor(private http: HttpClient) {
    FB.init({
      appId: "1837397963100315",
      status: false,
      cookie: false,
      xfbml: false,
      version: 'v4.0'
    });
  }

  fbLogin() {
    return new Promise((resolve, reject) => {

      FB.login(result => {
        if (result.authResponse) {
          return this.http
            .post(`https://localhost:8080/auth/facebook/start`, { access_token: result.authResponse.accessToken })
            .toPromise()
            .then(response => {

              // note: it expects the token in the response
              const token = response;
              if (token) {
                localStorage.setItem('id_token', JSON.stringify(token));
              }
              resolve(response);
            })
            .catch(() => reject());
        } else {
          reject();
        }
      }, { scope: 'public_profile,email' });
    });
  }


  logout() {
    localStorage.removeItem('id_token');
  }

  getCurrentUser() {
    return new Promise((resolve, reject) => {
      return this.http.get(`https://localhost:8080/auth/me`).toPromise().then(response => {
        resolve(response);
      }).catch(() => reject());
    });
  }

  isLoggedIn() {
    return new Promise((resolve, reject) => {
      this.getCurrentUser().then(user => resolve(true)).catch(() => reject(false));
    });
  }

}



