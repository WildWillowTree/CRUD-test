import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute, Params } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CrudService } from '../crud.service';




@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.css']
})
export class EdituserComponent implements OnInit {

  id: any;
  user: any;

  constructor(private activatedRoute: ActivatedRoute, private crudservice: CrudService, private formBuilder:FormBuilder, private router:Router) {

    //getting and storing dynamic ID
    this.id = this.activatedRoute.snapshot.paramMap.get('id');

    //Singe Product WEB API
    //Iniatializa Params Object
    var myFormData = new FormData();

    //Begin assigning parameters

    myFormData.append('userid', this.id);

    //user data post request
    this.crudservice.getsingleuser(myFormData);
    setTimeout(() => {
      this.user = this.crudservice.singleuserdata;
      this.editForm.controls["firstname"].setValue(this.user.username);
      this.editForm.controls["email"].setValue(this.user.email);
    }, 100);
   }

   //Edit user

   //Edit user
   editForm!: FormGroup;
   submitted= false;

   //add user form actions
   get f() {
     return this.editForm.controls;
   }
   onSubmit(){
     this.submitted = true;
     //stop here if form is invalid
     if(this.editForm.invalid){
       return;
     }
     //True if all the fields are filled
     if(this.submitted){
      //Initialize Params Object
      var myFormData = new FormData();

      //Begin assigning parameters

      myFormData.append('updateUsername', this.editForm.value.firstname);
      myFormData.append('updateEmail', this.editForm.value.email);
      myFormData.append('updateid', this.user.id);

      this.crudservice.updateuser(myFormData);
      this.router.navigate([`/users`]);
     }
   }

  ngOnInit(): void {
    //Add User form validations
    this.editForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],

      firstname: ['', Validators.required]
    });
  }
}
