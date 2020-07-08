import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  @Input() header;
  @Input() rows;
  @Input() TableHeading;
  @Input() showAddBtn;
  @Input() modalButton;
  @Input() modalType;
  @Input() modalTitle;
  @Input() displayTopics;
  @Output() onSubmitFun:EventEmitter<any> = new EventEmitter<any>();
  ngOnInit(): void {
    console.log(this.TableHeading)
  }

  getFormSubmit(data){
    this.onSubmitFun.emit(data);
  }
  getDate(timeStamp){
    let date = new Date(timeStamp);
    console.log(date.getDate());
    console.log(date.getHours());
    return `Created ${date.getHours()} hrs ago (${date.getDate()}/${date.getMonth()}/${date.getFullYear()})`;
  }

  getRow(data){
    console.log(data);
  }
}
