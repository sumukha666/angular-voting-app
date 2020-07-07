import { Component, OnInit,Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-dialogue',
  templateUrl: './dialogue.component.html',
  styleUrls: ['./dialogue.component.scss'],
  styles: [`
    .dark-modal .modal-content {
      background-color: #292b2c;
      color: white;
    }
    .dark-modal .close {
      color: white;
    }
    .light-blue-backdrop {
      background-color: #5cb3fd;
    }
  `]
})
export class DialogueComponent implements OnInit {
  @Input() modalButton;
  @Input() modalTitle;
  @Input() modalType;
  @Input() onSubmit;
  closeResult: string;
  submitModal(data){
    this.onSubmit(data);
    data.close()
  }

  constructor(private modalService: NgbModal) {}
  ngOnInit(): void {

  }
  openScrollableContent(longContent) {
    this.modalService.open(longContent, { scrollable: true,  centered: true  });
  }

}
