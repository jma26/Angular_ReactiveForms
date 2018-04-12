import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  registration: FormGroup;
  formSubmitAttempt: boolean;
  fullname: FormControl;
  email: FormControl;
  password: FormControl;
  confirmPassword: FormControl;

  constructor () { }

  ngOnInit() {
    this.createFormControls();
    this.createForm();
   }

  //  Create FormControls as part of component
   createFormControls() {
    this.fullname = new FormControl("", Validators.required),
    this.email = new FormControl("", Validators.required),
    this.password = new FormControl("", [Validators.required, Validators.minLength(5)]),
    this.confirmPassword = new FormControl("", Validators.required)
   }

  //  Bind FormControls to FormGroup model as properties
   createForm() {
    this.registration = new FormGroup({
      fullname: this.fullname,
      email: this.email,
      password: this.password,
      confirmPassword: this.confirmPassword
    })
   }

   register() {
     this.formSubmitAttempt = true;
     if (this.registration.valid) {
       this.formSubmitAttempt = false;
       console.log(this.registration);
      //  Obseravable would be set in here
       console.log('Form successfully submitted');
     } else {
       console.log(this.registration);
      // Redirect to 
       console.log('Form unsuccessfully submitted');
     }
   }

}
