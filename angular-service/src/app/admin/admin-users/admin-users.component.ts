import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-admin-users',
  templateUrl: './admin-users.component.html',
  styleUrls: ['./admin-users.component.scss'],
})
export class AdminUsersComponent implements OnInit {
  constructor(private http: HttpClient) {}
  TableHeading="Users"
  header = [];
  rows = [];
  showAddBtn=true;
  ngOnInit(): void {
    this.http.get('http://127.0.0.1:3000/users').subscribe((data) => {
      console.log(data);
      if (data['success']) {
        this.header = ['userId', 'userName', 'isAdmin'];
        this.rows = data['users'];
      }
    });
  }
  onSubmit(data) {
    console.log(data);
  }

}
