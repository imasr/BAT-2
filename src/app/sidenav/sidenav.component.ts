import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  OpenSetting = false;
  OpenOutlet = false;
  OpenBrand = false;
  arrowOutlet = true;
  arrowSet = true;
  arrowBrand = true;
  isActive: any;

  constructor(private route: Router) { }

  ngOnInit() {
  }

    Open = function (count) {
      switch (count) {
        case 'outlet':
          if (this.OpenOutlet === false) {
            this.OpenOutlet = true;
            this.arrowOutlet = false;
          } else {
            this.OpenOutlet = false;
            this.arrowOutlet = true;
          }
          break;
        case 'brand':
          if (this.OpenBrand === false) {
            this.OpenBrand = true;
            this.arrowBrand = false;
          } else {
            this.OpenBrand = false;
            this.arrowBrand = true;
          }
          break;
        case 'setting':
          if (this.OpenSetting === false) {
            this.OpenSetting = true;
            this.arrowSet = false;
          } else {
            this.OpenSetting = false;
            this.arrowSet = true;
          }
      }
    };

  logout() {
    localStorage.removeItem('token');
    this.route.navigate(['login']);
  }

}
