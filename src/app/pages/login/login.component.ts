import { Component, OnInit, inject } from '@angular/core';
import {
  Validators,
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
} from '@angular/forms';

import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';

import { MatDialog } from '@angular/material/dialog';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatIconModule,
    MatButtonModule,
    MatDividerModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit {
  constructor(private formBuilder: FormBuilder, private snackBar: MatSnackBar, private authService: AuthService) { }

  readonly dialog = inject(MatDialog);

  form: FormGroup = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });

  showPassword: boolean = false;

  pathImageLogin = "assets/images/food_image_1.jpg";
  pathLogoLogin = "assets/logos/logo-caipirao.png";
  ngOnInit() {

  }

  setPasswordVisilibity() {
    this.showPassword = !this.showPassword;
  }

  login() {
    let form = this.form.getRawValue();
    this.authService.login(form.email, form.password);
  }

  newAcessSolicitation() {
    this.snackBar.open(
      `
     Ainda não implementamos a criação de novos usuários
    `, "Fechar", { duration: 2000 });
  }
}
