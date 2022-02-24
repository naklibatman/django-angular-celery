import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  user: User = {
    firstName: '',
    lastName: '',
    age: 0,
    designation: ''
  };
  submitted = false;


  constructor(private userService : UsersService) { }

  ngOnInit(): void {
  }

  saveUser(): void{
    const data = {
      firstName: this.user.firstName,
      lastName: this.user.lastName,
      age: this.user.age,
      designation: this.user.designation,
    };
    this.userService.create(data)
    .subscribe(
      response => {
        console.log(response);
      },
      error =>{
        console.log(error);
      });
  }
  newUser(): void{
    this.user = {
      firstName: '',
      lastName: '',
      age: 0,
      designation: '',
    };
  }
}
