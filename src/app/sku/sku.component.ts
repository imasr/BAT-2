import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sku',
  templateUrl: './sku.component.html',
  styleUrls: ['./sku.component.css']
})
export class SkuComponent implements OnInit {
  tableSKUList: any;
  tableSKUdata: any = {
    tabletitle: 'ALL SKU',
    tableSubTitle: 'SKU',
    values: [
      'ID',
      'Name',
      'Brand ID',
      'Start Date',
      'BAT ID',
      'Base Points'

    ],
    alink: {
      Text1: 'ADD SKU',
      Text: 'Edit'
    }
  };
  constructor(private skuservice: AppService) { }

  ngOnInit() {
    this.skuservice.skuData().subscribe((response) => {
      this.tableSKUList = response;
      console.log(this.tableSKUList);

    });
  }

}
