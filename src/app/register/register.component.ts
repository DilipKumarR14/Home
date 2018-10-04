import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent{
public title="Registeration Form";
email = new FormControl('', [Validators.required,Validators.email]);
user = new FormControl('',[Validators.required,Validators.pattern("[A-Za-z]*")]);
user1 = this.user.value;
mobile = new FormControl('',[Validators.required,Validators.pattern("[0-9]{10}")]);
passwd= new FormControl('',[Validators.required]);
getErrorMessage() {
  return this.email.hasError('required') ? 'Email is required' :
      this.email.hasError('email') ? 'Not a valid email' :
          '';
}
getNameErrorMessage(){
  
  return this.user.hasError('required') ? 'Name is required':
  this.user.hasError('pattern') ? 'Name Must Be Characters ':
  '';
}
getMobileErrorMessage(){
  return this.mobile.hasError('required') ? 'Mobile number is required':
  this.mobile.hasError('pattern') ? 'Must be number and 10 digit':
  '';
}
getPasswordErrorMessage(){
  return this.passwd.hasError('required') ? 'Mobile number is required':
  '';
}

save(){
  debugger;
}
}
