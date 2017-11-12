import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AppService } from '../app.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: any;
  password: any;
  messageAlert= false;
  message: any;
  data: any;
  isLoading= false;
  buttonLogin= true;
  loginform: FormGroup;

  constructor(private formBuilder: FormBuilder, private route: Router, private loginService: AppService) {

   }

  ngOnInit() {
    this.loginform = this.formBuilder.group({
      'username': ['', Validators.required],
      'password': ['', [Validators.required, Validators.minLength(3)]],
      'checkbox': [false, Validators.required]
    });
  }
  login = function () {
    this.buttonLogin = false;
    this.isLoading = true;
    this.data = {
      email: this.loginform.controls['username'].value,
      password : this.loginform.controls['password'].value
    };
    console.log(this.data);
    this.loginService.login(this.data).subscribe(
      (res) => {
        console.log(res);
        if (res.error) {
          this.messageAlert = true;
          this.message = res.error.message;
          this.buttonLogin = true;
          this.isLoading = false;
        }else {
          localStorage.setItem('token', res.token);
          this.route.navigate(['/dashboard']);
        }
      },
      (err) => {
        console.log(err);
        this.messageAlert = true;
        this.message = err;
        this.buttonLogin = true;
        this.isLoading = false;
      }
    );
  };

}
