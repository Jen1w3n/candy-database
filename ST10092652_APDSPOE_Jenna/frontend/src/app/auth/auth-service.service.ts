import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  private token!: string;

  constructor(private http: HttpClient) { }

  signup (userusername:string, userpassword: string)
  {
  this.http.post('http://localhost:3002/api/users/signup',{username:userusername,userpassword:userpassword})
  .subscribe(response =>{
    alert("Signed up successfully!");
    console.log(response);
  });
  }

  login (userusername:string, userpassword: string)
  {
    this.http.post<{token: string}>('http://localhost:3002/api/users/login',{username:userusername,userpassword:userpassword})
    .subscribe(response =>{
      this.token = response.token;
      alert("Logged in successfully!");
      console.log(response);
    });
  }

  getToken() {
    return this.token;
  }
  
}
