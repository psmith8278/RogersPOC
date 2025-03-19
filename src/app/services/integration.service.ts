import { Injectable } from '@angular/core';
import { catchError, delay, Observable, of, throwError } from 'rxjs';
import { PeriodicElement } from '../model/gridData.modal';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class IntegrationService {

  private dummyData: PeriodicElement[] = [
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
      "parentBuhmId": "5ede4d9cf41a0058f1949bbe",
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
      "parentBuhmId": "5ede4d9cf41a0058f1949bbe",
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
      "parentBuhmId": "5ede4d9cf41a0058f1949bbe",
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
      "parentBuhmId": "5ede4d9cf41a0058f1949bbe",
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
      "parentBuhmId": "5ede4d9cf41a0058f1949bb1",
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
      "parentBuhmId": "5ede4d9cf41a0058f1949bb3",
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
      "parentBuhmId": "5ede4d9cf41a0058f1949bb3",
      "status": "true",
      "messageStatus": "Failure",
      "source": "west"
    },
    {
      "hubId": "8",
      "hubCode": "ABF1",
      "hubName": "Banff Central",
      "hubType": "Primary",
      "primaryHubId": "5ede4d9cf41a0058f1949bb5",
      "addr1": "123 Mountain Rd",
      "addr2": "Suite 500",
      "city": "Banff",
      "state": "AB",
      "zipCode": "T1L 1A1",
      "serviceStatus": "A",
      "lattitude": "51.1778",
      "logitude": "-115.5736",
      "parentBuhmId": "5ede4d9cf41a0058f1949bb5",
      "status": "true",
      "messageStatus": "Failure",
      "source": "west"
    },
    {
      "hubId": "9",
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
      "status": "true",
      "messageStatus": "Success",
      "source": "west"
    },
    {
      "hubId": "10",
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
      "status": "true",
      "messageStatus": "Success",
      "source": "west"
    },
    {
      "hubId": "11",
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
      "status": "true",
      "messageStatus": "Success",
      "source": "west"
    }
  ];

  constructor(private http: HttpClient) { }

  getData(): Observable<PeriodicElement[]> {
    // return this.http.get<PeriodicElement[]>(url).pipe(catchError(this.handleError)
    // );
    return of(this.dummyData);
  }

  submitRowData(rowData: PeriodicElement): Observable<any> {
    // return this.http.post<any>(url, rowData).pipe(catchError(this.handleError)
    // );
    console.log('Simulated API request:', rowData);
    const fakeResponse = { success: true, message: 'data saved successfully', id: Math.floor(Math.random() * 1000) }
    return of(fakeResponse).pipe(delay(500));
  }

  private handleError(error: HttpErrorResponse) {
    let errorMessage = "An unknown error occured!";

    if (error.error instanceof ErrorEvent) {
      errorMessage = `Client error:'${error.error.message}`
    } else {
      errorMessage = `Server error:'${error.status} - ${error.message}`
    }
    return throwError(() => new Error(errorMessage));
  }
  
  getHubData(data: any) :Observable<PeriodicElement[]> {
    return of(this.dummyData);
  }

  updateData(data: any) : Observable<any> {
    console.log('Simulated API request:', data);
    const fakeResponse = { success: true, message: 'data saved successfully', id: Math.floor(Math.random() * 1000) }
    return of(fakeResponse).pipe(delay(500));
  }

}
