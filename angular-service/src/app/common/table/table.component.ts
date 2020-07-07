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
  @Output() onSubmitFun:EventEmitter<any> = new EventEmitter<any>();
  ngOnInit(): void {
    console.log(this.TableHeading)
  }

  getFormSubmit(data){
    this.onSubmitFun.emit(data);
  }

}
