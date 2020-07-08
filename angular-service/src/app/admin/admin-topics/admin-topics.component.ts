import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TopicsService } from '../../services/topic/topics.service';
import { VotesService } from "../../services/vote/votes.service"
@Component({
  selector: 'app-admin-topics',
  templateUrl: './admin-topics.component.html',
  styleUrls: ['./admin-topics.component.scss'],
})
export class AdminTopicsComponent implements OnInit {
  constructor(private http: HttpClient, private _topicServ: TopicsService,private _votes:VotesService) {}
  header = [];
  rows = [];
  respheader=[]
  respRows=[]
  showAddBtn = true;
  ngOnInit(): void {
    this.getTopics();
  }

  onSubmitFun(data) {
    console.log(data);
    this._topicServ.createTopic(data).subscribe(
      (res) => {
        console.log(res);
        this.getTopics();
      },
      (err) => {
        console.log(err);
      }
    );
  }

  onDelete(topic) {
    console.log(topic.id);
    this._topicServ.deleteTopic(topic.topicId).subscribe(
      (res) => {
        console.log(res);
        this.getTopics();
      },
      (err) => {
        console.log(err);
      }
    );
  }

  getTopics(){
    this._topicServ.getTopics().subscribe(
      (res) => {
        this.header = [
          'topicId',
          'creatorName',
          'time',
          'statement',
          'category',
        ];
        this.rows = res['topics'];
      },
      (err) => console.log(err)
    );
  }


  getTopicDetail(data){
    console.log(data);
    this._votes.getVoteDetails(data.topicId)
    .subscribe(
      (res)=> {
        console.log(res);
        this.respheader=["userName","topicResp"];
        this.respRows=res.votes;
      },
      (err) => console.log(err)
    )
  }


}
