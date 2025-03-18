import { Component, NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {RouterModule} from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { DatagridComponent } from './integration-components/datagrid/datagrid.component';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterOutlet, RouterModule, NavbarComponent],
  schemas: [NO_ERRORS_SCHEMA],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Rogers';

  

}
