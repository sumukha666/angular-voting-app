import { Component, OnInit } from '@angular/core';
import { TopicsService } from '../../services/topic/topics.service';
import {VotesService} from "../../services/vote/votes.service"
@Component({
  selector: 'app-user-topics',
  templateUrl: './user-topics.component.html',
  styleUrls: ['./user-topics.component.scss']
})
export class UserTopicsComponent implements OnInit {
  topic: Object;
  vote: Boolean;
  constructor(private _topicServ: TopicsService, private _vote:VotesService) { }

  ngOnInit(): void {
    this.getTopics()
  }
  rows=[]
  getTopics(){
    this._topicServ.getTopics().subscribe(
      (res) => {
        this.rows = res['topics'];
      },
      (err) => console.log(err)
    );
  }

  getTopicResp(data){
    console.log(data);
    this._vote.submitVote({
      topicResp:data.vote,
      topicId:data.topic.topicId
    }).subscribe(
      (res)=> console.log(res)
    )
  }

}
