import { Component, OnInit } from '@angular/core';
import { User } from '../interfaces/users';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  users:User[] = [
    {
      id: 1,
      name: 'Jack'
    },
    {
      id: 2,
      name: 'Claire'
    },
    {
      id: 3,
      name: 'Jamie'
    }
  ];

}
