import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { UsersService } from 'src/app/services/users.service';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users?: User[];
  currentUser?: User;
  currentIndex = -1;
  firstName = '';

  constructor(private userService: UsersService) { }
  
  ngOnInit(): void {
    this.retrieveUsers();
  }

  retrieveUsers(): void{
    this.userService.getAll()
    .subscribe(
      data => {
        this.users = data;
        console.log(data)
      },
      error => {
        console.log(error);
      });
  }

  refreshList(): void {
    this.retrieveUsers();
    this.currentUser = undefined;
    this.currentIndex = -1;
  }
  setActiveUser(user: User, index: number): void {
    this.currentUser = user;
    this.currentIndex = index;
  }
  removeAllUsers(): void {
    this.userService.deleteAll()
      .subscribe(
        response => {
          console.log(response);
          this.refreshList();
        },
        error => {
          console.log(error);
        });
  }

}
