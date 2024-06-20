import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatButtonModule, MatIconModule, MatDividerModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  pathLogoLogin = "assets/logos/logo-caipirao.png";

  darkMode: boolean = false;

  constructor(private authService: AuthService){

  }

  logout(){
    this.authService.logout();
  }

  setDarkMode(){
    this.darkMode = !this.darkMode;
  }

}
