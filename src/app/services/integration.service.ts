import { Injectable } from '@angular/core';
import { catchError, delay, Observable, of, throwError } from 'rxjs';
import { PeriodicElement } from '../model/gridData.modal';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class IntegrationService {

  private url = "https://b3hk9kv57e.execute-api.ca-central-1.amazonaws.com/dev/";

  // private dummyData: PeriodicElement[] = [{ "hubId": "57bab3c0-cfdc-4791-ad95-dc699968ef88", "hubCode": "53", "hubName": "TESTNEW", "hubType": "TYPE", "primaryHubId": "PRIMARY_HUB", "addr1": "13866 88 Avenue", "addr2": "", "city": "SURREY", "state": "BC", "zipCode": "V3V7K2", "serviceStatus": "Active", "lattitude": "lattitude", "logitude": "logitude", "parentBhumId": "parentBhumId", "status": "true", "messageStatus": "messageStatus", "source": "sourcesource" }, { "hubId": "cbaa7dd3-1f36-4fd5-850d-c573294c46f0", "hubCode": "54", "hubName": "TESTNEW", "hubType": "TYPE", "primaryHubId": "PRIMARY_HUB", "addr1": "13866 88 Avenue", "addr2": "", "city": "SURREY", "state": "BC", "zipCode": "V3V7K2", "serviceStatus": "Active", "lattitude": "lattitude", "logitude": "logitude", "parentBhumId": "parentBhumId", "status": "true", "messageStatus": "messageStatus", "source": "sourcesource" }];

  constructor(private http: HttpClient) { }

  getData(): Observable<PeriodicElement[]> {
    console.log(this.url + "getRogers");
    return this.http.get<PeriodicElement[]>(this.url + "getRogers").pipe(catchError(this.handleError)
    );
    //return of(this.dummyData);
  }

  submitRowData(rowData: PeriodicElement): Observable<any> {
    const url = "https://xbm1pe30ia.execute-api.ca-central-1.amazonaws.com/dev/submit"
    return this.http.post<any>(url, rowData).pipe(catchError(this.handleError)
    );
    // console.log('Simulated API request:', rowData);
    // const fakeResponse = { success: true, message: 'data saved successfully', id: Math.floor(Math.random() * 1000) }
    // return of(fakeResponse).pipe(delay(500));
  }

  private handleError(error: HttpErrorResponse) {
    console.log(error);
    let errorMessage = "An unknown error occured!";
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Client error:'${error.error.error.errorMessage}`
    } else {
      errorMessage = `Server error:'${error.status} - ${error.error.errorMessage}`
    }
    return throwError(() => new Error(errorMessage));
  }

  getHubData(data: any): Observable<any> {
    console.log("url", this.url+ "rogersisp/fetch/" + data);
    let param: any = {'hubCode': data};
    const url = "https://do1jpmprf4.execute-api.ca-central-1.amazonaws.com/dev/fetchData"
      return this.http.get<any>(url, { params: param }).pipe(catchError(this.handleError)
    );
    //return of(this.dummyData);
  }

  updateData(data: any): Observable<any> {
    return this.http.post<any>(this.url + "save", data).pipe(catchError(this.handleError) 
    );
     // console.log('Simulated API request:', data);
    // const fakeResponse = { success: true, message: 'data saved successfully', id: Math.floor(Math.random() * 1000) }
    // return of(fakeResponse).pipe(delay(500));
  }
  // addDataAfterFetch(data: any): Observable<any> {
  //   const url ="https://do1jpmprf4.execute-api.ca-central-1.amazonaws.com/dev/saveRogersISP"
  //   return this.http.post<any>(url, data).pipe(catchError(this.handleError)
  //   );
  // }

}
