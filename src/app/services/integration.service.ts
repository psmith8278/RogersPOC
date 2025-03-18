import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { PeriodicElement } from '../model/gridData.modal';

@Injectable({
  providedIn: 'root'
})
export class IntegrationService {

  private dummyData : PeriodicElement[] = [
    {
        "hubId": "5ede4d9cf41a0058f1949bbf",
        "hubCode": "GAL2",
        "hubName": "Denver.CO",
        "hubType": "Secondary",
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
      "hubCode": "GAL2",
      "hubName": "Denver.CO",
      "hubType": "Secondary",
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
      "hubCode": "GAL2",
      "hubName": "Denver.CO",
      "hubType": "Secondary",
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
      "hubCode": "GAL2",
      "hubName": "Denver.CO",
      "hubType": "Secondary",
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
    "hubCode": "GAL2",
    "hubName": "Denver.CO",
    "hubType": "Secondary",
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
    "hubCode": "GAL2",
    "hubName": "Denver.CO",
    "hubType": "Secondary",
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
    "hubCode": "GAL2",
    "hubName": "Denver.CO",
    "hubType": "Secondary",
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
    "hubCode": "GAL2",
    "hubName": "Denver.CO",
    "hubType": "Secondary",
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
    "hubCode": "GAL2",
    "hubName": "Denver.CO",
    "hubType": "Secondary",
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
}
