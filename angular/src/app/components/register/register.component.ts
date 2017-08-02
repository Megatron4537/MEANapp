import { Component, OnInit } from '@angular/core';
import { ValidateService } from '../../services/validate.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  name: String;
  username: String;
  email: String;
  password: String;

  rForm: FormGroup;
  post: any;

  constructor(private validateService: ValidateService, private fb: FormBuilder) {
    this.rForm = fb.group({
      'name': [null, Validators.required],
      'username': [null, Validators.required, Validators.minLength(6), Validators.maxLength(18)],
      'email': [null, Validators.required, Validators.minLength(6), Validators.maxLength(18)],
      'password': [null, Validators.required, Validators.minLength(6), Validators.maxLength(18)]
    });

  }

  ngOnInit() {
  }

  onRegisterSubmit() {
    const user = {
      name: this.name,
      username: this.username,
      email: this.email,
      password: this.password
    }
  }

  /*   //required fields
    if(!this.validateService.validateRegister(user)){
    console.log('Please fill in all fields');
    return false;
  }
  
  if (!this.validateService.validateEmail(user.email)) {
    console.log('Please fill in all fields');
    return false;
  }
   */
}

