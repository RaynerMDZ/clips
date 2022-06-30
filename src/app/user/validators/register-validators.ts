import { AbstractControl, ValidationErrors} from "@angular/forms";

export class RegisterValidators {
  static matchPassword(group: AbstractControl): ValidationErrors | null {
    const password = group.get('password')?.value;
    const confirmPassword = group.get('confirm_password')?.value;

    if (!password || !confirmPassword) {
      return { controlNotFound: false }
    }

    return password === confirmPassword ? null : { noMatch: true };
  }
}
