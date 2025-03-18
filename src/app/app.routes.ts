import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DatagridComponent } from './integration-components/datagrid/datagrid.component';
import { ComcastSPIPComponent } from './comcast-componenets/comcast-spip/comcast-spip.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
    { path: 'home', component: DatagridComponent },
    { path: '', component: LoginComponent },
    { path: 'comcast', component: ComcastSPIPComponent },
    { path: 'customers/:id', redirectTo: 'users/:id', pathMatch: 'full' },
    // { path: 'users', children: [
    //   { path: ':id', component: AppComponent }
    //   ] 
    // }
];
