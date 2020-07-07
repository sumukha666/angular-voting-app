import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-admin-topics',
  templateUrl: './admin-topics.component.html',
  styleUrls: ['./admin-topics.component.scss']
})
export class AdminTopicsComponent implements OnInit {

  constructor(private http:HttpClient) { }
  header=[];
  rows=[];
  showAddBtn=true;
  ngOnInit(): void {
    this.http.get("http://127.0.0.1:3000/topics").subscribe((data)=>{
      if(data["success"]){
        this.header=["topicId","creatorName","time","statement","category"];
        this.rows=data["topics"];
      }
    })
  }

}
