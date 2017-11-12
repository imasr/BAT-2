import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AppService } from '../app.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-viewtable',
  templateUrl: './viewtable.component.html',
  styleUrls: ['./viewtable.component.css']
})
export class ViewtableComponent implements OnInit {

  tableOutletList: any;
  tabledata: any = {
    tabletitle: 'All Outlets',
    tableSubTitle: 'OUTLETS',
    values: ['ID',
      'BAT ID',
      'Store Name',
      'Points',
      'Last Accessed',
      'Performance',
      'Assigned TME'
    ],
    alink: {
      Type: 'SUBMIT',
      Text: 'Edit Account'
    }
  };
  constructor(private outletviewService: AppService) { }

  ngOnInit() {
    this.outletviewService.OutletData().subscribe((response) => {
      this.tableOutletList = response;
      console.log(this.tableOutletList);

    });
  }
  saveData(std) {
    console.log('---------------outlet', std);

  }

}
