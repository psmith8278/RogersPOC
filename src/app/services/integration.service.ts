import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { PeriodicElement } from '../model/gridData.modal';

@Injectable({
  providedIn: 'root'
})
export class IntegrationService {

  private dummyData : PeriodicElement[] = [
    {
        "hubId": "5ede4d9cf41a0058f19dsgsdgs",
        "hubCode": "GAL1",
        "hubName": "Denver.CO 1",
        "hubType": "Secondary 1",
        "primaryHubId": "5ede4d9cf41a0058f1949bbe",
        "addr1": "123 Main St",
        "addr2": "Suite 1",
        "city": "DENVER",
        "state": "CO",
        "zipCode": "80202",
        "serviceStatus": "A",
        "lattitude": "-104.9903",
        "logitude": "39.7392",
        "parentBuhmId": "5ede4d9cf41a0058f1949bbe",
        "status": "true"
    },
    {
      "hubId": "5ede4d9cf41a0058fsdfsqw",
      "hubCode": "GAL2",
      "hubName": "Denver.CO 2",
      "hubType": "Secondary 2",
      "primaryHubId": "5ede4d9cf41a0058f1949bbe",
      "addr1": "123 Main St",
      "addr2": "Suite 1",
      "city": "DENVER",
      "state": "CO",
      "zipCode": "80202",
      "serviceStatus": "A",
      "lattitude": "-104.9903",
      "logitude": "39.7392",
      "parentBuhmId": "5ede4d9cf41a0058f1949bbe",
      "status": "true"
    },
    {
      "hubId": "5ede4d9cf41a0058f1949bbf",
      "hubCode": "GAL3",
      "hubName": "Denver.CO 3",
      "hubType": "Secondary 3",
      "primaryHubId": "5ede4d9cf41a0058f1949bbe",
      "addr1": "123 Main St",
      "addr2": "Suite 1",
      "city": "DENVER",
      "state": "CO",
      "zipCode": "80202",
      "serviceStatus": "A",
      "lattitude": "-104.9903",
      "logitude": "39.7392",
      "parentBuhmId": "5ede4d9cf41a0058f1949bbe",
      "status": "true"
    },
    {
      "hubId": "5ede4d9cf41a0058f1949bbf",
      "hubCode": "GAL4",
      "hubName": "Denver.CO 4",
      "hubType": "Secondary 4",
      "primaryHubId": "5ede4d9cf41a0058f1949bbe",
      "addr1": "123 Main St",
      "addr2": "Suite 1",
      "city": "DENVER",
      "state": "CO",
      "zipCode": "80202",
      "serviceStatus": "A",
      "lattitude": "-104.9903",
      "logitude": "39.7392",
      "parentBuhmId": "5ede4d9cf41a0058f1949bbe",
      "status": "true"
  },
  {
    "hubId": "5ede4d9cf41a0058f1949bbf",
    "hubCode": "GAL5",
    "hubName": "Denver.CO 5",
    "hubType": "Secondary 5",
    "primaryHubId": "5ede4d9cf41a0058f1949bbe",
    "addr1": "123 Main St",
    "addr2": "Suite 1",
    "city": "DENVER",
    "state": "CO",
    "zipCode": "80202",
    "serviceStatus": "A",
    "lattitude": "-104.9903",
    "logitude": "39.7392",
    "parentBuhmId": "5ede4d9cf41a0058f1949bbe",
    "status": "true"
  },
  {
    "hubId": "5ede4d9cf41a0058f1949bbf",
    "hubCode": "GAL6",
    "hubName": "Denver.CO 6",
    "hubType": "Secondary 6",
    "primaryHubId": "5ede4d9cf41a0058f1949bbe",
    "addr1": "123 Main St",
    "addr2": "Suite 1",
    "city": "DENVER",
    "state": "CO",
    "zipCode": "80202",
    "serviceStatus": "A",
    "lattitude": "-104.9903",
    "logitude": "39.7392",
    "parentBuhmId": "5ede4d9cf41a0058f1949bbe",
    "status": "true"
  },
  {
    "hubId": "5ede4d9cf41a0058f1949bbf",
    "hubCode": "GAL7",
    "hubName": "Denver.CO 7",
    "hubType": "Secondary 7",
    "primaryHubId": "5ede4d9cf41a0058f1949bbe",
    "addr1": "123 Main St",
    "addr2": "Suite 1",
    "city": "DENVER",
    "state": "CO",
    "zipCode": "80202",
    "serviceStatus": "A",
    "lattitude": "-104.9903",
    "logitude": "39.7392",
    "parentBuhmId": "5ede4d9cf41a0058f1949bbe",
    "status": "true"
  },
  {
    "hubId": "5ede4d9cf41a0058f1949bbf",
    "hubCode": "GAL8",
    "hubName": "Denver.CO 8",
    "hubType": "Secondary 8",
    "primaryHubId": "5ede4d9cf41a0058f1949bbe",
    "addr1": "123 Main St",
    "addr2": "Suite 1",
    "city": "DENVER",
    "state": "CO",
    "zipCode": "80202",
    "serviceStatus": "A",
    "lattitude": "-104.9903",
    "logitude": "39.7392",
    "parentBuhmId": "5ede4d9cf41a0058f1949bbe",
    "status": "true"
  },
  {
    "hubId": "5ede4d9cf41a0058f1949bbf",
    "hubCode": "GAL9",
    "hubName": "Denver.CO 9",
    "hubType": "Secondary 9",
    "primaryHubId": "5ede4d9cf41a0058f1949bbe",
    "addr1": "123 Main St",
    "addr2": "Suite 1",
    "city": "DENVER",
    "state": "CO",
    "zipCode": "80202",
    "serviceStatus": "A",
    "lattitude": "-104.9903",
    "logitude": "39.7392",
    "parentBuhmId": "5ede4d9cf41a0058f1949bbe",
    "status": "true"  },
  ];

  constructor() { }

  getData() : Observable<PeriodicElement[]> {
    return of(this.dummyData);
  }

  getHubData(data: any) :Observable<PeriodicElement[]> {
    return of(this.dummyData);
  }

  updateData(data: any) : Observable<PeriodicElement[]> {
    return of(this.dummyData);
  }

}
