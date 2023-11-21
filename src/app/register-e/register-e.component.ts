import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-e',
  templateUrl: './register-e.component.html',
  styleUrls: ['./register-e.component.css']
})
export class RegisterEComponent implements OnInit {

  RegisterForm!: FormGroup;
  passwordVisible: boolean = true;



  ngOnInit(): void {
    this.RegisterForm = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'username': new FormControl(null, [Validators.required, Validators.minLength(5)]),
      'password': new FormControl(null, [Validators.required, Validators.minLength(8), Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/)]),
      'phoneNumber': new FormControl(null, [Validators.required, Validators.pattern(/^\d{10}$/)]),
      'address': new FormControl(null, Validators.required),
      'state': new FormControl(null, Validators.required),
      'zip': new FormControl(null, [Validators.required, Validators.pattern(/^\d{6}$/)]),

    })
  }
  onSubmit() {
    if (this.RegisterForm.valid) {

      console.log(this.RegisterForm);
    } else {

      alert('Please fill in all required fields correctly.');
    }
  }
  togglePasswordVisibility() {
    this.passwordVisible = !this.passwordVisible;

  }

}
