import { Component } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {AngularFireAuth} from "@angular/fire/compat/auth";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private readonly firebaseAuth: AngularFireAuth) { }

  // email: FormControl = new FormControl('', [
  //   Validators.required,
  //   Validators.email
  // ]);
  //
  // password: FormControl = new FormControl('', [
  //   Validators.required,
  // ]);
  //
  // loginForm: FormGroup = new FormGroup({
  //   email: this.email,
  //   password: this.password,
  // });

  showAlert: boolean = false;
  alertMessage: string = '';
  alertColor: string = 'blue';
  inSubmission: boolean = false;

  credentials = {
    email: '',
    password: ''
  }

  async login() {
    this.showAlert = true;
    this.alertMessage = 'Please wait! your account is being authenticated.';
    this.alertColor = 'blue';
    this.inSubmission = true;

    try {
      await this.firebaseAuth.signInWithEmailAndPassword(this.credentials.email as string, this.credentials.password as string);
    } catch (error) {
      console.log(error);
      this.showAlert = true;
      this.alertMessage = 'An unexpected error occurred. Please try again later';
      this.alertColor = 'red';
      this.inSubmission = false;
      return;
    }

    this.alertMessage = `Welcome back ${this.credentials.email}`;
    this.alertColor = 'green';
  }


}
