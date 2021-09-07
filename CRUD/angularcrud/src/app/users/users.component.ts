import { Component, OnInit } from '@angular/core';
import { CrudService } from '../crud.service';
//import Swal from 'sweetalert2/dist/sweetalert2.js';
import { User } from '../interfaces/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  data:any = [];

  constructor(private crudservice: CrudService) {
    this.loadData();
  }

    //Get all users data
    loadData(){
    //Get all users details
    this.crudservice.getusers().subscribe((res: any) => {
      
      this.data = res;
    });
   }
    //Delete user
    deleteuser(id: any){
      if(confirm("Are you sure to delete?")){
       //Initializa Params Object
       var myFormData = new FormData();

       //Begin assigning parameters
        myFormData.append('deleteid', id);
        this.crudservice.deleteuser(myFormData);
        //Sweet alert message popup
        /*Swal.fire({
          title:"Hurray!!",
          text: "User has been deleted successfully",
          icon: 'success'
        });*/
        this.loadData();
     }
   }

  ngOnInit(): void {
  }

}
