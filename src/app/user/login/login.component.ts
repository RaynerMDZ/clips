import { Component } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{

  email: FormControl = new FormControl('', [
    Validators.required,
    Validators.email
  ]);

  password: FormControl = new FormControl('', [
    Validators.required,
  ]);

  loginForm: FormGroup = new FormGroup({
    email: this.email,
    password: this.password,
  });

  login() {
    console.log("login called!")
  }
}
