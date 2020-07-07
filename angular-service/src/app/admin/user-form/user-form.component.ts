import { Component, OnInit, Input,Output, EventEmitter } from '@angular/core';
export class User {
  public name: string;
  public email: string;
  public password: string;
  public isAdmin: Boolean;
}


@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {
  @Output() submitModal:EventEmitter<any> = new EventEmitter<any>();
  @Input() modal;
  constructor() { }

  ngOnInit(): void {
  }

  model = new User();


  onSubmit(form) {

    this.submitModal.emit(form.value);

  }

}
