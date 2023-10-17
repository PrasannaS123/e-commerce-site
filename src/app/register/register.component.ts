import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  RegisterForm!: FormGroup;
  passwordVisible: boolean = true;



ngOnInit(): void {
  this.RegisterForm = new FormGroup({
    'email': new FormControl(null, [Validators.required, Validators.email]),
    'username': new FormControl(null, [Validators.required, Validators.minLength(5) ]),
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
