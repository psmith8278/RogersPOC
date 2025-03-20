import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { MatTabsModule } from '@angular/material/tabs';
@Component({
  selector: 'app-ril-admin',
  imports: [NavbarComponent, MatTabsModule],
  templateUrl: './ril-admin.component.html',
  styleUrl: './ril-admin.component.css'
})
export class RilAdminComponent {

}
