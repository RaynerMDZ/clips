import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import {AuthService} from "../../services/auth.service";
import IUser from "../../models/user.model";
import {RegisterValidators} from "../validators/register-validators";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(private readonly authService: AuthService) {
  }

  name: FormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(3)
  ]);

  email: FormControl = new FormControl('', [
    Validators.required,
    Validators.email
  ]);

  age: FormControl = new FormControl<number | null>(null, [
    Validators.required,
    Validators.min(18),
    Validators.max(120),
  ]);

  password: FormControl = new FormControl('', [
    Validators.required,
    Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,}$/)
  ]);

  confirm_password: FormControl = new FormControl('', [
    Validators.required
  ]);

  phoneNumber: FormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(14),
    Validators.maxLength(14)
  ]);

  registerForm: FormGroup = new FormGroup({
    name: this.name,
    email: this.email,
    age: this.age,
    password: this.password,
    confirm_password: this.confirm_password,
    phoneNumber: this.phoneNumber
  }, [RegisterValidators.matchPassword]);

  showAlert: boolean = false;
  alertMessage: string = 'Please wait! your account is being created.';
  alertColor: string = 'blue';
  inSubmission: boolean = false;

  async register() {
    this.showAlert = true;
    this.alertMessage = 'Please wait! your account is being created.';
    this.alertColor = 'blue';
    this.inSubmission = true;

    try {
      await this.authService.createUser(this.registerForm.value as IUser);

    } catch (error) {
      this.showAlert = true;
      this.alertMessage = 'An unexpected error occurred. Please try again later';
      this.alertColor = 'red';
      this.inSubmission = false;
      return;
    }

    this.alertMessage = 'Your account has been created successfully!';
    this.alertColor = 'green';
  }
}
