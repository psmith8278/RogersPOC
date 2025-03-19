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

    dummyData: PeriodicElement[] = [
      {
        "hubId": "1",
        "hubCode": "50",
        "hubName": "Test",
        "hubType": "Type",
        "primaryHubId": "PRIMARY_HUB",
        "addr1": "13866 88 Avenue",
        "addr2": "Suite 1",
        "city": "SURREY",
        "state": "CO",
        "zipCode": "80202",
        "serviceStatus": "A",
        "lattitude": "-104.9903",
        "logitude": "39.7392",
        "parentBhumId": "5ede4d9cf41a0058f1949bbe",
        "status": "true",
        "messageStatus": "Success",
        "source": "east"
      },
      {
        "hubId": "2",
        "hubCode": "GAL2",
        "hubName": "Boulder.CO",
        "hubType": "Secondary",
        "primaryHubId": "5ede4d9cf41a0058f1949bbe",
        "addr1": "456 Elm St",
        "addr2": "Apt 3",
        "city": "BOULDER",
        "state": "CO",
        "zipCode": "80301",
        "serviceStatus": "A",
        "lattitude": "-105.2705",
        "logitude": "40.015",
        "parentBhumId": "5ede4d9cf41a0058f1949bbe",
        "status": "true",
        "messageStatus": "Success",
        "source": "west"
      },
      {
        "hubId": "3",
        "hubCode": "GAL4",
        "hubName": "Fort Collins.CO",
        "hubType": "Secondary",
        "primaryHubId": "5ede4d9cf41a0058f1949bbe",
        "addr1": "789 Oak St",
        "addr2": "Unit 4",
        "city": "FORT COLLINS",
        "state": "CO",
        "zipCode": "80521",
        "serviceStatus": "A",
        "lattitude": "-104.8214",
        "logitude": "38.8339",
        "parentBhumId": "5ede4d9cf41a0058f1949bbe",
        "status": "true",
        "messageStatus": "Success",
        "source": "west"
      },
      {
        "hubId": "4",
        "hubCode": "ABC1",
        "hubName": "Calgary Central",
        "hubType": "Primary",
        "primaryHubId": "5ede4d9cf41a0058f1949bbe",
        "addr1": "123 Main St",
        "addr2": "Suite 1",
        "city": "DENVER",
        "state": "CO",
        "zipCode": "80202",
        "serviceStatus": "A",
        "lattitude": "-104.9903",
        "logitude": "39.7392",
        "parentBhumId": "5ede4d9cf41a0058f1949bbe",
        "status": "true",
        "messageStatus": "Failure",
        "source": "west"
      },
      {
        "hubId": "5",
        "hubCode": "ABC2",
        "hubName": "Calgary North",
        "hubType": "Secondary",
        "primaryHubId": "5ede4d9cf41a0058f1949bb1",
        "addr1": "456 Elm St",
        "addr2": "Suite 200",
        "city": "Calgary",
        "state": "AB",
        "zipCode": "T2P 0L4",
        "serviceStatus": "A",
        "lattitude": "51.0447",
        "logitude": "-114.0719",
        "parentBhumId": "5ede4d9cf41a0058f1949bb1",
        "status": "true",
        "messageStatus": "Failure",
        "source": "west"
      },
      {
        "hubId": "6",
        "hubCode": "ABED",
        "hubName": "Edmonton Central",
        "hubType": "Primary",
        "primaryHubId": "5ede4d9cf41a0058f1949bb3",
        "addr1": "789 Oak St",
        "addr2": "Suite 300",
        "city": "Edmonton",
        "state": "AB",
        "zipCode": "T5J 0L4",
        "serviceStatus": "A",
        "lattitude": "53.5461",
        "logitude": "-113.4938",
        "parentBhumId": "5ede4d9cf41a0058f1949bb3",
        "status": "true",
        "messageStatus": "Saved",
        "source": "west"
      },
      {
        "hubId": "7",
        "hubCode": "ABE2",
        "hubName": "Edmonton South",
        "hubType": "Secondary",
        "primaryHubId": "5ede4d9cf41a0058f1949bb3",
        "addr1": "101 Pine St",
        "addr2": "Suite 400",
        "city": "Edmonton",
        "state": "AB",
        "zipCode": "T5J 0L4",
        "serviceStatus": "A",
        "lattitude": "53.5461",
        "logitude": "-113.4938",
        "parentBhumId": "5ede4d9cf41a0058f1949bb3",
        "status": "true",
        "messageStatus": "Failure",
        "source": "west"
      }
    ];
    
}
