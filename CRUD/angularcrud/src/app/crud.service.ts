import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  userdata: any;
  userid: any;
  singleuserdata: any;

 constructor(private http:HttpClient) { }

  //get single user
  public getsingleuser(userid){
    return this.http.post('http://localhost/users.php/', userid).subscribe((res: Response) => {
      this.singleuserdata = res[0];
    });
  }

  //get all users details
  public getusers(){
    return this.http.get('http://localhost/users.php');
  }

  //add new user
  public adduser(userdata: any){
    return this.http.post('http://localhost/users.php/', userdata).subscribe( (res:Response) =>  {
      this.getusers();
    });
  }

  //delete user
  public deleteuser(userid: any){
    return this.http.post('http://localhost/users.php/', userid).subscribe((res: Response) => {});
  }
  
}
