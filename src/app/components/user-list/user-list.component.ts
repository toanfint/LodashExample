import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-list',
  standalone: false,
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent implements OnInit {
  uniqueUsers: any[] = [];
  groupedUsers: any = {};

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.uniqueUsers = this.userService.getUniqueUsers();
    this.groupedUsers = this.userService.groupByRole();
  }
}
