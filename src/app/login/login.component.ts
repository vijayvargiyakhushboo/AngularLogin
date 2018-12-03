/*import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { 
  alert();
  }

  ngOnInit() {
  }

}*/



import {Component} from '@angular/core';
import { ApiService } from '../app.service';

import {CustomerService} from '../customer.service';
import {Router} from '@angular/router';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  /*email = 'peter@klaven';
  password = 'cityslicka';*/

  email = '';
  password = '';

  constructor(private api: ApiService, private customer: CustomerService, private router: Router) {
  }

  tryLogin() {
    this.api.login(
      this.email,
      this.password
    )
      .subscribe(
        r => {
          if (r.token) {
           var ret =  this.customer.setToken(r.token);
           console.log("ret: ",ret);
           this.router.navigateByUrl('/dashboard');
          }
        },
        r => {
          alert(r.error.error);
        });
  }

  getLoggedIn(form:NgForm){

    let value = Object.values(form.value);
  	let  loginObj = { "fn": "selectLoginInfo","params": ["login", value[0], value[1]] };
  	this.api.postLogin(loginObj).subscribe((response)=>{
  		console.log("response: ",response[0]);
  		//console.log("response: "+response[0].id);

  		if(response[0].user_email == value[0] && response[0].password == value[1] ){
  			console.log("success login");
  			this.router.navigateByUrl('/liststudent');
  		}else{
  			console.log("login failed");
            //this.router.navigate(['./login']);
  		}
  	});
  }

}