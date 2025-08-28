import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import _ from 'lodash';
import { Post } from '../../model/post';

@Component({
  selector: 'app-user-list',
  standalone: false,
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent implements OnInit {
  uniqueUsers: any[] = [];
  groupedUsers: any = {};

  posts: Post[] = [];
  firstPost: Post | undefined;
  hasTitle: boolean = false;
  safeUserId: number | null = null;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.uniqueUsers = this.userService.getUniqueUsers();
    this.groupedUsers = this.userService.groupByRole();

    this.userService.getPosts().subscribe((data) => {
      this.posts = data;
      console.log('Posts:', this.posts);

      // 1. _.find -> tìm post có id = 10
      this.firstPost = _.find(this.posts, { id: 10 });

      // 2. _.isEmpty -> kiểm tra danh sách posts có rỗng không
      console.log('Posts empty?', _.isEmpty(this.posts));

      // 3. _.has -> kiểm tra post tìm được có thuộc tính "title" không
      this.hasTitle = _.has(this.firstPost, 'title');

      // 4. _.get -> lấy giá trị an toàn (nếu không có thì trả null)
      this.safeUserId = _.get(this.firstPost, 'userId', null);
    });

  }
}
