import { Component, OnInit } from '@angular/core';
import { ValidateService } from '../../services/validate.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

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

  constructor(/*private validateService: ValidateService,*/ private authService:AuthService, private fb: FormBuilder) {
    this.rForm = fb.group({
      name :  [null, Validators.required],
      username : [null, Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(18)])],
      email : [null, Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(18)])],
    password : [null, Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(18)])],
    validate : ''
    
  });
  }

  addPost(post){
    this.name = post.name;
    
    this.username = post.username;
    this.email = post.email;
    this.password = post.password;    
    console.log( this.name + ' ' + this.email);
    
  }

  ngOnInit() {

    this.rForm.get('validate').valueChanges.subscribe(
      (validate)=>{
        this.rForm
      }
    )
  }

  /*onRegisterSubmit() {
    const user = {
      name: this.name,
      username: this.username,
      email: this.email,
      password: this.password
    }
 
    console.log( user.name, user.username, user.email, user.password);
  }
*/
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
  


  /*
  //savePoint
  this.authService.registerUser(user).subscribe(data=>{
    if(data.success){

    }
  });
  */
}


