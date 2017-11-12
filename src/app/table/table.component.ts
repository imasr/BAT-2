import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  @Input() outletList: any;
  @Input() data: any;
  // @Output() addStdEvent = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
    // this.addStdEvent.next('ashishshshshshs');
  console.log(this.outletList)
  console.log(this.data);
}
  // edit = function (data) {
  //   console.log(data);
  //   this.outletviewService.addId(data);
  //   // this.route.navigate(['/dashboard']);
  // };



}
