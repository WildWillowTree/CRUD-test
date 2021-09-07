import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  userData!: any;
  userid!: any;
  singleuserdata!: any;
  api: string = 'http://localhost:8080/users.php';

 constructor(private http:HttpClient) { }

  //get single user
  public getsingleuser(userid: any){
    return this.http.post<User>(this.api, userid).subscribe((res: any) => {
      this.singleuserdata = res[0];
    });
  }

  //get all users details
  public getusers(): Observable<User>{
    return this.http.get<User>(this.api);
  }

  //add new user
  public adduser(userData: any){
    return this.http.post<User>(this.api, userData).subscribe((res) =>  {
      this.getusers();
    });
  }

  //delete user
  public deleteuser(userid: any){
    return this.http
    .post<User>(this.api, userid)
    .subscribe((res) => {});
    console.log("hola");
  }

  //update user
  public updateuser(userid: any){
    return this.http
    .post<User>(this.api, userid)
    .subscribe((res) => {});
  }
}
