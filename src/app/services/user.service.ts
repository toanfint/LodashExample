import { Injectable } from '@angular/core';
import _ from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor() { }

  private users = [
    { id: 1, name: 'Hùng', role: 'admin' },
    { id: 2, name: 'Nam', role: 'user' },
    { id: 3, name: 'Lan', role: 'user' },
    { id: 4, name: 'Hùng', role: 'admin' }, // trùng tên
    { id: 5, name: 'Tuấn', role: 'user' },
  ];

  getUsers() {
    return this.users;
  }

  getUniqueUsers() {
    // Loại bỏ user trùng tên bằng lodash
    return _.uniqBy(this.users, 'name');
  }

  groupByRole() {
    // Gom nhóm theo role
    return _.groupBy(this.users, 'role');
  }
}
