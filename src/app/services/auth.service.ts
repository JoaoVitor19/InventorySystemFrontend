import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DialogService } from './dialog.service';
import { DialogType } from '../enums/dialogType.enum';
import { Route, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user = null;
  token: string | null = null;
  expiryDate: Date | null = null;

  apiUrl = "https://localhost:44366";

  constructor(public http: HttpClient, private dialogService: DialogService, private router: Router) { }

  // isLoggedIn(): boolean {
  //   let token = JSON.parse(localStorage.getItem("token") ?? "");
  //   if (token && new Date(token.expiryDate) > new Date()) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }

  getAuthToken(): string | null {
    if (this.token == null) {
      this.token = localStorage.getItem("token") || null;
      let expiryDateStorage = localStorage.getItem("expiryDate");
      this.expiryDate = expiryDateStorage != null ? new Date(expiryDateStorage) : null;
    }

    if (this.expiryDate != null && this.expiryDate < new Date()) {
      return null;
    } else {
      return this.token;
    }
  }

  public login(email: string, password: string) {
    this.http.post(`${this.apiUrl}/login`, { email: email, password: password }).subscribe({
      next: (data: any) => {
        console.log(data);
        this.user = data.user;
        this.token = data.token.accessToken;
        this.expiryDate = new Date(data.token.expiryDate);

        localStorage.setItem("user", JSON.stringify(this.user));
        localStorage.setItem("token", this.token!);
        localStorage.setItem("expiryDate", this.expiryDate!.toISOString());

        this.router.navigate(['/home']);
      },
      error: (error: any) => {
        this.user = null;
        this.token = null;
        this.expiryDate = null;

        console.log(error);

        this.dialogService.openDialog("Erro na tentativa de acesso", error.error.message, DialogType.SIMPLE);
      }
    });
  }

  public logout() {
    this.user = null;
  }
}
