import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  
  signUpForm!: FormGroup;
  errorMessage!: string;

  constructor(private formBuilder: FormBuilder,
              private AuthService: AuthService,
              private router: Router) { }


  ngOnInit(): void {
    this.initForm();
  }
  initForm() {
    this.signUpForm = this.formBuilder.group( {
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern(/[0-9a-zA-Z]{6,}/)]]
    });
  }
  onSubmit() {
    const email = this.signUpForm.get('email')?.value;
    const password = this.signUpForm.get('password')?.value;
    this.AuthService.createNewUser(email, password).then(
      () => {
        this.router.navigate(['/books']);
      },
      (error) => {
        this.errorMessage = error;
      }
    );
  }

}
