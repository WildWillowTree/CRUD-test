import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UsersComponent } from './users/users.component';
import { AdduserComponent } from './adduser/adduser.component';

import { UserComponent } from './user/user.component';

import { EdituserComponent } from './edituser/edituser.component';


const routes: Routes = [
  { path: '', component: UsersComponent },
  { path: 'users', component: UsersComponent },
  { path: 'adduser', component: AdduserComponent},
  { path: 'user/:id', component:UserComponent },
  { path: 'edituser/:id', component: EdituserComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
