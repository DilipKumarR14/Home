import { Component, OnInit } from '@angular/core';
import{FormControl,Validators} from '@angular/forms';
@Component({
  selector: 'app-reg',
  templateUrl: './reg.component.html',
  styleUrls: ['./reg.component.css']
})
export class RegComponent implements OnInit {
  email=new FormControl('',[Validators.required, Validators.email]);
  getErrorMessage(){
    return this.email.hasError('required') ? 'You Must Enter the Valid Email':
    this.email.hasError('email') ? 'Not A Valid Email Address' :
    '';
  }
  hide=true;
  constructor() { }

  ngOnInit() {
  }

}
