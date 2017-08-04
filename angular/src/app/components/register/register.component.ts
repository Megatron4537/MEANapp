import { Component, OnInit } from '@angular/core';
import { ValidateService } from '../../services/validate.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';

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

  constructor(
    /*private validateService: ValidateService,*/
    private authService:AuthService,
    private fb: FormBuilder,
    private flash: FlashMessagesService,
    private router: Router
    ) {
    this.rForm = fb.group({
      name :  [null, Validators.required],
      username : [null, Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(18)])],
      email : [null, Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(18)])],
    password : [null, Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(18)])],
    validate : ''
  });
  }

  //aka onRegisterSubmit()
  //validation service implemented in reactive fashion in constructor rather than as a service
  addPost(post){
    const user = {
    name: post.name,
    username: post.username,
    email: post.email,
    password: post.password
    } 
    console.log( user.name + ' ' + user.email);

    //registering
    this.authService.registerUser(user).subscribe(data=>{
    if(data.success){
      this.flash.show('You are now registered!', {cssClass: 'alert-success', timeout: 3000});
      this.router.navigate(['/login']);
    } else{
      this.flash.show('Oops! Something went wrong!', {cssClass: 'alert-danger', timeout: 3000});
      this.router.navigate(['/register']);
    }
  });
    
  }

  ngOnInit() {

    this.rForm.get('validate').valueChanges.subscribe(
      (validate)=>{
        this.rForm
      }
    )
    
  }

}


