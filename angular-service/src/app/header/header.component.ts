import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() isAdmin;
  @Input() selected;
  ngOnInit( ): void {
    console.log(this.isAdmin)
    console.log(this.selected)
  }


}
