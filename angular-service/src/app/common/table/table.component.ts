import { Component, OnInit, Input } from '@angular/core';

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
  @Input() onSubmit;
  @Input() modalTitle;

  ngOnInit(): void {
    console.log(this.TableHeading)
  }

}
