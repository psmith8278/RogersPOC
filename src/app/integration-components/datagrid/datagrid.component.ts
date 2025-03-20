import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTable, MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { PeriodicElement } from '../../model/gridData.modal';
import { IntegrationService } from '../../services/integration.service';
import { DialogBoxComponent } from '../../dialog-box/dialog-box.component';

import { MatDialog } from '@angular/material/dialog';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { NavbarComponent } from '../../navbar/navbar.component';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-datagrid',
  imports: [CommonModule, MatTableModule, MatButtonModule, MatIconModule, MatDialogModule,
    MatFormFieldModule, MatInputModule, NavbarComponent],
  templateUrl: './datagrid.component.html',
  styleUrl: './datagrid.component.css'
})
export class DatagridComponent implements OnInit {
  @ViewChild(MatTable, { static: true })
  table!: MatTable<any>;

  constructor(private integrationService: IntegrationService, public dialog: MatDialog) {

  }

  displayedColumns: string[] = [
    "hubCode",
    "hubName",
    "hubType",
    "city",
    "state",
    "serviceStatus",
    "status",
    "messageStatus",
    "source"
  ]
  dataSource: PeriodicElement[] = [];

  records: any[] = [];
  headers: string[] = [];

  columnHeaders: { [key: string]: string } = {
    "hubCode": "Hub Code",
    "hubName": "Hub Name",
    "hubType": "Hub Type",
    "city": "City",
    "state": "State",
    "serviceStatus": "Service Status",
    "status": "Status",
    "messageStatus": "Message Status",
    "source": "source"
  }

  get displayColumnWithActions() {
    return [...this.displayedColumns, 'actions'];
  }


  ngOnInit(): void {
    this.getRogersGridData();
  }

  getRogersGridData() {
    this.integrationService.getData().subscribe({
      next: (data) => {
        this.dataSource = data;
      },
      error: (error) => {
        console.log("Error fetching data:", error)
      },
      complete: () => {
        console.log("successfull");
      }
    })
  }

  editRow(row: any) {
    console.log(row);
  }

  submitRow(rowData: PeriodicElement) {
    this.integrationService.submitRowData(rowData).subscribe({
      next: (response) => {
        console.log("submit response", response);
        alert("Successfully submitted");
      },
      error: (error) => {
        alert(error);
      }
    })
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) //client side error
    {
      console.error('An error occurred:', error.error.message);
    }
    else  //server side error
    {
      //console.error(`Backend returned code ${error.status}, body was: ${error.error}`);
      let resp = JSON.parse(error.error);
      console.log(resp.message);//Since you returned a {message: ...} object from API
    }
  }

  handleFileSelect(evt: any) {
    var file = evt.target.files[0]; // FileList object
    if (file) {
      const reader = new FileReader();
      reader.readAsText(file);
      reader.onload = () => {
        const csvData = reader.result as string;
        this.parseCSV(csvData);
      }
    }
  }

  parseCSV(csvData: string) {
    const rows = csvData.split('\n').map(row => row.trim()).filter(row => row);
    this.headers = rows[0].split(",").map(header => header.trim());
    this.records = rows.slice(1).map(row => {
      const values = row.split(",").map(value => value.trim());
      return this.headers.reduce((acc, header, index) => {
        acc[header] = values[index] || "";
        return acc;
      }, {} as any);
    })
  }

  openDialog(action: any, obj: any,) {
    // const index = ELEMENT_DATA.findIndex(item => item.Hub_Code === action.Hub_Code);
    // if(index > -1) {
    //   ELEMENT_DATA[index] = action;
    // }
    obj.action = action;
    const dialogRef = this.dialog.open(DialogBoxComponent, {
      width: 'max-content',
      maxWidth: 'fit-content',
      data: obj
    });

    dialogRef.afterClosed().subscribe((result: { event: string; }) => {
      console.log(result);
      this.updateRowData(result);
    });
  }

  updateRowData(row_obj: any) {
    console.log('updateRowData====>', this.dataSource);
    const sendData: PeriodicElement = {
      hubId: row_obj.data.hubId,
      hubCode: row_obj.data.hubCode,
      hubName: row_obj.data.hubName,
      hubType: row_obj.data.hubType,
      primaryHubId: row_obj.data.primaryHubId,
      addr1: row_obj.data.addr1,
      addr2: row_obj.data.addr2,
      city: row_obj.data.city,
      state: row_obj.data.state,
      zipCode: row_obj.data.zipCode,
      serviceStatus: row_obj.data.serviceStatus,
      lattitude: row_obj.data.lattitude,
      logitude: row_obj.data.logitude,
      parentBhumId: row_obj.data.parentBhumId,
      partnerID: row_obj.data.partnerID,
      locality: row_obj.data.locality,
      timezone: row_obj.data.timezone,
      countryCode: row_obj.data.countryCode,
      status: row_obj.data.status,
      messageStatus: row_obj.data.messageStatus,
      source: row_obj.data.source,
    };

    this.integrationService.updateData(sendData).subscribe({
      next: (data) => {
        //this.dataSource = data;
      },
      error: (error) => {
        console.log("Error fetching data:", error)
      },
      complete: () => {
        this.getRogersGridData();
        alert("Data updated Successfully");
      }
    })
  }

  // addRowData(row_obj: any) {
  //   console.log('updateRowData====>', row_obj.data);
  //   var d = new Date();
  //   // this.dataSource.push({
  //   //   hubId: d.getTime(),
  //   //   hubName: row_obj.data.hubName,
  //   //   hubCode: '',
  //   //   hubType: '',
  //   //   primaryHubId: '',
  //   //   addr1: 'test',
  //   //   addr2: 'test2',
  //   //   city: 'ch',
  //   //   state: 'tn',
  //   //   zipCode: '88',
  //   //   serviceStatus: 'A',
  //   //   lattitude: '',
  //   //   logitude: '',
  //   //   parentBhumId: '',
  //   //   status: '',
  //   //   messageStatus: '',
  //   //   source: ''
  //   // });
  //   // this.table.renderRows();
  //   const sendData: PeriodicElement = {
  //     hubId: row_obj.data.hubId,
  //     hubCode: row_obj.data.hubCode,
  //     hubName: row_obj.data.hubName,
  //     hubType: row_obj.data.hubType,
  //     primaryHubId: row_obj.data.primaryHubId,
  //     addr1: row_obj.data.addr1,
  //     addr2: row_obj.data.addr2,
  //     city: row_obj.data.city,
  //     state: row_obj.data.state,
  //     zipCode: row_obj.data.zipCode,
  //     serviceStatus: row_obj.data.serviceStatus,
  //     lattitude: row_obj.data.lattitude,
  //     logitude: row_obj.data.logitude,
  //     parentBhumId: row_obj.data.parentBhumId,
  //     status: row_obj.data.status,
  //     messageStatus: row_obj.data.messageStatus,
  //     source: row_obj.data.source,
  //   };
  //   this.integrationService.updateData(sendData).subscribe({
  //     next: (data) => {
  //       this.getRogersGridData();
  //       //this.dataSource = data;
  //     },
  //     error: (error) => {
  //       console.log("Error fetching data:", error)
  //     },
  //     complete: () => {
  //       this.getRogersGridData();
  //       alert("Data updated Successfully");
  //     }
  //   })
  // }

}
