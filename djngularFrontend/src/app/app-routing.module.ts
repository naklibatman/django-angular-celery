import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserListComponent } from './components/user-list/user-list.component';
import { AddUserComponent } from './components/add-user/add-user.component';

const routes: Routes = [
  { path: '', redirectTo: 'users', pathMatch: 'full'},
  { path: 'users', component: UserListComponent },
  { path: 'add', component: AddUserComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
