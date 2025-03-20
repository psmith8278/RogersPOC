import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { NavbarComponent } from '../../navbar/navbar.component';
import { PeriodicElement } from '../../model/gridData.modal';

@Component({
  selector: 'app-comcast-spip',
  imports: [CommonModule, MatTableModule, MatButtonModule, MatIconModule, MatDialogModule,
    MatFormFieldModule, MatInputModule, NavbarComponent],
  templateUrl: './comcast-spip.component.html',
  styleUrl: './comcast-spip.component.css'
})
export class ComcastSPIPComponent {

    dummyData = {
      "partner": [
          "comcast",
          "rogers"
      ],
      "createdBy": "CreatedBy",
      "modifiedBy": "ModifiedBy",
      "hub_id": "c59ba723-53c7-4336-a1bf-5d0cb5aaaaf0",
      "hub": {
          "hubCode": "GAL2",
          "hubName": "Denver.CO",
          "hubType": "Secondary",
          "primaryHubId": "5ede4d9cf41a0058f1949bbe",
          "addr1": "123 Main St",
          "addr2": "Suite 1",
          "city": "DENVER",
          "countryCode": "CAN",
          "locality": "Specific information for hubsite",
          "location": {
              "type": "Point",
              "coordinates": null
          },
          "serviceStatus": "A",
          "state": "CO",
          "zipCode": "80202",
          "timezone": "",
          "BuhmId": "5ede4d9cf41a0058f1949bbe"
      }
  }
    
}
