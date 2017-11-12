import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { ViewtableComponent } from './viewtable/viewtable.component';
import { SkuComponent } from './sku/sku.component';



export const routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: SidenavComponent,
    children: [
      {
        path: 'outletViewTable',
        component: ViewtableComponent
      },
      {
        path: 'skuViewTable',
        component: SkuComponent
      }
    ]
  }
];
