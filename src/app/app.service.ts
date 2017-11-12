import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';


@Injectable()
export class AppService {

  constructor(private http: Http) { }

  login(data) {
    console.log(data);
    return this.http.post('http://5.9.144.226:3016/admin/login', data)
    .map(res => {
        console.log(res);
        return res.json();
      }
    );
  }
  OutletData() {
    // const myHeaders = new Headers();
    // myHeaders.append('Content-Type', 'application/json');
    // myHeaders.append('Access-Control-Allow-Origin', '*' );
    // const options = new RequestOptions({ headers: myHeaders });


    return this.http.get('http://5.9.144.226:3016/outlet/get/1/13?accessToken=' + localStorage.getItem('token'))
      .map(res => {
        const data = res.json();
        const outletList = [];
        data.forEach(value => {
          outletList.push([
            value.data.id,
            value.data.bat_id,
            value.data.outlet_name,
            value.data.points_value,
            value.data.updatedAt,
            value.data.performance,
            value.tme
          ]);
        });
        return outletList;
      });
  }
  skuData() {
    return this.http.get('http://5.9.144.226:3016/get/sku/1/100?accessToken=' + localStorage.getItem('token'))
      .map(res => {
        console.log(res.json());

        const data = res.json();
        const outletList = [];
        data.forEach(value => {
          console.log(value);

          outletList.push([
            value.sku.id,
            value.brandName,
            value.sku.brand_id,
            value.sku.createdAt,
            value.sku.bat_id,
            value.sku.basepoint,
            value.tme
          ]);
        });
        return outletList;
      });
  }
}
