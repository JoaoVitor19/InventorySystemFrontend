import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user = null;
  token = null;
  expiryDate: Date | null = null;

  apiUrl = "https://localhost:44366";

  constructor(public http: HttpClient) { }

  // isLoggedIn(): boolean {
  //   let token = JSON.parse(localStorage.getItem("token") ?? "");
  //   if (token && new Date(token.expiryDate) > new Date()) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }

  getAuthToken(): string {
    return this.token || "";
  }

  public login(email: string, password: string) {
    this.http.post(`${this.apiUrl}/login`, { email: email, password: password }).subscribe({
      next: (data: any) => {
        console.log(data);
        this.user = data.user;
        this.token = data.token.accessToken;
        this.expiryDate = new Date(data.token.expiryDate);
      },
      error: (error: any) => {
        this.user = null;
        this.token = null;
        this.expiryDate = null;
        console.log(error);
      }
    });
  }

  public logout() {
    this.user = null;
  }
}
