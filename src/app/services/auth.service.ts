import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user = null;

  constructor(public http: HttpClient) { }

  private login() {

  }

  private logout() {
    this.user = null;
  }
}
