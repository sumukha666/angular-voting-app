import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-admin-users',
  templateUrl: './admin-users.component.html',
  styleUrls: ['./admin-users.component.scss'],
})
export class AdminUsersComponent implements OnInit {
  constructor(private http: HttpClient) {}
  TableHeading = 'Users';
  header = [];
  rows = [];
  showAddBtn = true;
  onSubmitFun(data) {
    console.log('getting form value');
    console.log(data);
    data["isAdmin"] = data["isAdmin"] ? true : false;
    this.http.post('http://127.0.0.1:3000/users', data).subscribe((result) => {
      console.log(result);
      if(result["success"]){
        this.getUsers();
      }
    });
  }
  getUsers(){
    this.http.get('http://127.0.0.1:3000/users').subscribe((data) => {
      if (data['success']) {
        this.header = ['userId', 'userName', 'isAdmin'];
        this.rows = data['users'];
      }
    });
  }

  ngOnInit(): void {
    this.getUsers();
  }

}
