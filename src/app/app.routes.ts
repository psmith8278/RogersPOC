import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DatagridComponent } from './integration-components/datagrid/datagrid.component';
import { ComcastSPIPComponent } from './comcast-componenets/comcast-spip/comcast-spip.component';
import { LoginComponent } from './login/login.component';
import { ComcastRilComponent } from './comcast-componenets/comcast.ril/comcast.ril.component';
import { RilAdminComponent } from './ril-admin/ril-admin.component';

export const routes: Routes = [
    { path: 'home', component: DatagridComponent },
    { path: '', component: LoginComponent },
    { path: 'comcast', component: ComcastSPIPComponent },
    { path: 'ril', component: ComcastRilComponent },
    { path: 'admin', component: RilAdminComponent },
    // { path: 'users', children: [
    //   { path: ':id', component: AppComponent }
    //   ] 
    // }
];
