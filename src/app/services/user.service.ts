import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import _ from 'lodash';
import { Post } from '../model/post';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) { }

  private apiUrl = 'https://jsonplaceholder.typicode.com/posts';
  private apiUrl2 = 'https://jsonplaceholder.typicode.com/users';

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

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.apiUrl);
  }
}
