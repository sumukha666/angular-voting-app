import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
export class Topic {
  public name: string;
  public email: string;
  public password: string;
  public isAdmin: Boolean;
}


@Component({
  selector: 'app-topic-form',
  templateUrl: './topic-form.component.html',
  styleUrls: ['./topic-form.component.scss']
})
export class TopicFormComponent implements OnInit {

  @Output() submitModal:EventEmitter<any> = new EventEmitter<any>();
  @Input() modal;
  constructor() { }

  ngOnInit(): void {
  }

  model = new Topic();


  onSubmit(form) {

    this.submitModal.emit(form.value);

  }
}
