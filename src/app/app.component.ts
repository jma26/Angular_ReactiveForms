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



  constructor () { }

  ngOnInit() {
    this.registration = new FormGroup({
      fullname: new FormControl("", Validators.required),
      email: new FormControl("", Validators.required),
      password: new FormControl("", [Validators.required, Validators.minLength(5)]),
      confirmPassword: new FormControl("", Validators.required)
    })
   }

   register() {
     this.formSubmitAttempt = true;
     if (this.registration.valid) {
       this.formSubmitAttempt = false;
      //  Obseravable would be set in here
      console.log(this.registration);
      console.log(this.registration.controls.fullname);
       console.log('Form successfully submitted');
     } else {
       console.log('Form unsuccessfully submitted');
     }
   }

}
