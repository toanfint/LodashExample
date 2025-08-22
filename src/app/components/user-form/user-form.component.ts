import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import _ from 'lodash';

@Component({
  selector: 'app-user-form',
  standalone: false,
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.css'
})
export class UserFormComponent implements OnInit {
  userForm!: FormGroup;
  originalData = { name: 'Toàn', age: 40 };
  isChanged = false;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    // Khởi tạo form với dữ liệu gốc
    this.userForm = this.fb.group({
      name: [this.originalData.name],
      age: [this.originalData.age],
    });

    // Lắng nghe giá trị thay đổi sử dụng isEqual của lodash để kiểm tra
    this.userForm.valueChanges.subscribe(value => {
      this.isChanged = !_.isEqual(value, this.originalData);
    });
  }
}
