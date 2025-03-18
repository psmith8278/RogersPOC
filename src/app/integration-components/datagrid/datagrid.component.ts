import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTableModule} from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { PeriodicElement } from '../../model/gridData.modal';
import { IntegrationService } from '../../services/integration.service';

// export interface PeriodicElement {
//   HUB_ID: string;
//   Hub_Code: string;
//   Hub_Name: string;
//   Hub_Type: string;
//   Primary_Hub_ID: string;
//   ADDR1: string;
//   ADDR2: string;
//   CITY:string;
//   STATE: string;
//   ZIP_CODE:string;
//   SERVICE_STATUS:string;
//   LATITUDE:string;
//   LONGITUDE: string;
//   Parent_BUHM_ID: string;
//   PartnerID: string;
//   Locality: string;
//   Timezone?:string;
//   CountryCode:string;
//   Message_Status?: string;
//   Source?: string;
  
// }

// const ELEMENT_DATA: PeriodicElement[] = [
//   {
//       "HUB_ID": "5ede4d9cf41a0058f1949bbf",
//       "Hub_Code": "GAL2",
//       "Hub_Name": "Denver.CO",
//       "Hub_Type": "Secondary",
//       "Primary_Hub_ID": "5ede4d9cf41a0058f1949bbe",
//       "ADDR1": "123 Main St",
//       "ADDR2": "Suite 1",
//       "CITY": "DENVER",
//       "STATE": "CO",
//       "ZIP_CODE": "80202",
//       "SERVICE_STATUS": "A",
//       "LATITUDE": "-104.9903",
//       "LONGITUDE": "39.7392",
//       "Parent_BUHM_ID": "5ede4d9cf41a0058f1949bbe",
//       "PartnerID": "comcast",
//       "Locality": "DENVER",
//       "Timezone": "",
//       "CountryCode": "USA",
//       "Message_Status": "Success",
//       "Source": "East"
//   },
//   {
//       "HUB_ID": "5ede4d9cf41a0058f1949bc0",
//       "Hub_Code": "GAL3",
//       "Hub_Name": "Boulder.CO",
//       "Hub_Type": "Secondary",
//       "Primary_Hub_ID": "5ede4d9cf41a0058f1949bbe",
//       "ADDR1": "456 Elm St",
//       "ADDR2": "Apt 3",
//       "CITY": "BOULDER",
//       "STATE": "CO",
//       "ZIP_CODE": "80301",
//       "SERVICE_STATUS": "A",
//       "LATITUDE": "-105.2705",
//       "LONGITUDE": "40.015",
//       "Parent_BUHM_ID": "5ede4d9cf41a0058f1949bbe",
//       "PartnerID": "comcast",
//       "Locality": "BOULDER",
//       "Timezone": "",
//       "CountryCode": "USA",
//       "Message_Status": "Failure",
//       "Source": "West"
//   },
//   {
//       "HUB_ID": "5ede4d9cf41a0058f1949bc1",
//       "Hub_Code": "GAL4",
//       "Hub_Name": "Fort Collins.CO",
//       "Hub_Type": "Secondary",
//       "Primary_Hub_ID": "5ede4d9cf41a0058f1949bbe",
//       "ADDR1": "789 Oak St",
//       "ADDR2": "Unit 4",
//       "CITY": "FORT COLLINS",
//       "STATE": "CO",
//       "ZIP_CODE": "80521",
//       "SERVICE_STATUS": "A",
//       "LATITUDE": "-105.0844",
//       "LONGITUDE": "40.5853",
//       "Parent_BUHM_ID": "5ede4d9cf41a0058f1949bbe",
//       "PartnerID": "comcast",
//       "Locality": "FORT COLLINS",
//       "Timezone": "",
//       "CountryCode": "USA",
//       "Message_Status": "Saved",
//       "Source": "National"
//   },
//   {
//     "HUB_ID": "5ede4d9cf41a0058f1949bc1",
//     "Hub_Code": "GAL4",
//     "Hub_Name": "Fort Collins.CO",
//     "Hub_Type": "Secondary",
//     "Primary_Hub_ID": "5ede4d9cf41a0058f1949bbe",
//     "ADDR1": "789 Oak St",
//     "ADDR2": "Unit 4",
//     "CITY": "FORT COLLINS",
//     "STATE": "CO",
//     "ZIP_CODE": "80521",
//     "SERVICE_STATUS": "A",
//     "LATITUDE": "-105.0844",
//     "LONGITUDE": "40.5853",
//     "Parent_BUHM_ID": "5ede4d9cf41a0058f1949bbe",
//     "PartnerID": "comcast",
//     "Locality": "FORT COLLINS",
//     "Timezone": "",
//     "CountryCode": "USA",
//     "Message_Status": "Saved",
//     "Source": ""
// },
// {
//     "HUB_ID": "5ede4d9cf41a0058f1949bc2",
//     "Hub_Code": "GAL5",
//     "Hub_Name": "Colorado Springs.CO",
//     "Hub_Type": "Secondary",
//     "Primary_Hub_ID": "5ede4d9cf41a0058f1949bbe",
//     "ADDR1": "101 Pine St",
//     "ADDR2": "Suite 5",
//     "CITY": "COLORADO SPRINGS",
//     "STATE": "CO",
//     "ZIP_CODE": "80903",
//     "SERVICE_STATUS": "A",
//     "LATITUDE": "-104.8214",
//     "LONGITUDE": "38.8339",
//     "Parent_BUHM_ID": "5ede4d9cf41a0058f1949bbe",
//     "PartnerID": "comcast",
//     "Locality": "COLORADO SPRINGS",
//     "Timezone": "",
//     "CountryCode": "USA",
//     "Message_Status": "",
//     "Source": ""
// },
// {
//     "HUB_ID": "5ede4d9cf41a0058f1949bb1",
//     "Hub_Code": "ABC1",
//     "Hub_Name": "Calgary Central",
//     "Hub_Type": "Primary",
//     "Primary_Hub_ID": "5ede4d9cf41a0058f1949bb1",
//     "ADDR1": "123 Main St",
//     "ADDR2": "Suite 100",
//     "CITY": "Calgary",
//     "STATE": "AB",
//     "ZIP_CODE": "T2P 0L4",
//     "SERVICE_STATUS": "A",
//     "LATITUDE": "51.0447",
//     "LONGITUDE": "-114.0719",
//     "Parent_BUHM_ID": "5ede4d9cf41a0058f1949bb1",
//     "PartnerID": "rogers",
//     "Locality": "Downtown",
//     "Timezone": "MST",
//     "CountryCode": "CAN",
//     "Message_Status": "",
//     "Source": ""
// },
// {
//     "HUB_ID": "5ede4d9cf41a0058f1949bb2",
//     "Hub_Code": "ABC2",
//     "Hub_Name": "Calgary North",
//     "Hub_Type": "Secondary",
//     "Primary_Hub_ID": "5ede4d9cf41a0058f1949bb1",
//     "ADDR1": "456 Elm St",
//     "ADDR2": "Suite 200",
//     "CITY": "Calgary",
//     "STATE": "AB",
//     "ZIP_CODE": "T2P 0L4",
//     "SERVICE_STATUS": "A",
//     "LATITUDE": "51.0447",
//     "LONGITUDE": "-114.0719",
//     "Parent_BUHM_ID": "5ede4d9cf41a0058f1949bb1",
//     "PartnerID": "rogers",
//     "Locality": "North",
//     "Timezone": "MST",
//     "CountryCode": "CAN",
//     "Message_Status": "",
//     "Source": ""
// },
// {
//     "HUB_ID": "5ede4d9cf41a0058f1949bb3",
//     "Hub_Code": "ABED",
//     "Hub_Name": "Edmonton Central",
//     "Hub_Type": "Primary",
//     "Primary_Hub_ID": "5ede4d9cf41a0058f1949bb3",
//     "ADDR1": "789 Oak St",
//     "ADDR2": "Suite 300",
//     "CITY": "Edmonton",
//     "STATE": "AB",
//     "ZIP_CODE": "T5J 0L4",
//     "SERVICE_STATUS": "A",
//     "LATITUDE": "53.5461",
//     "LONGITUDE": "-113.4938",
//     "Parent_BUHM_ID": "5ede4d9cf41a0058f1949bb3",
//     "PartnerID": "rogers",
//     "Locality": "Downtown",
//     "Timezone": "MST",
//     "CountryCode": "CAN",
//     "Message_Status": "",
//     "Source": ""
// },
// {
//     "HUB_ID": "5ede4d9cf41a0058f1949bb4",
//     "Hub_Code": "ABE2",
//     "Hub_Name": "Edmonton South",
//     "Hub_Type": "Secondary",
//     "Primary_Hub_ID": "5ede4d9cf41a0058f1949bb3",
//     "ADDR1": "101 Pine St",
//     "ADDR2": "Suite 400",
//     "CITY": "Edmonton",
//     "STATE": "AB",
//     "ZIP_CODE": "T5J 0L4",
//     "SERVICE_STATUS": "A",
//     "LATITUDE": "53.5461",
//     "LONGITUDE": "-113.4938",
//     "Parent_BUHM_ID": "5ede4d9cf41a0058f1949bb3",
//     "PartnerID": "rogers",
//     "Locality": "South",
//     "Timezone": "MST",
//     "CountryCode": "CAN",
//     "Message_Status": "",
//     "Source": ""
// },
// ];

@Component({
  selector: 'app-datagrid',
  imports: [CommonModule, MatTableModule, MatButtonModule, MatIconModule],
  templateUrl: './datagrid.component.html',
  styleUrl: './datagrid.component.css'
})
export class DatagridComponent implements OnInit {

  constructor(private integrationService:IntegrationService){

  }

  displayedColumns: string[] = [
    "hubCode",
    "hubName",
    "hubType",
    "city",
    "state",
    "serviceStatus",
    "status"
  ]
  dataSource: PeriodicElement[] = [];
  
  records: any[] = [];
  headers: string[] = [];

  columnHeaders: {[key:string]:string} = {
    "hubCode": "Hub Code",
    "hubName":"Hub Name",
    "hubType":"Hub Type",
    "city":"City",
    "state":"State",
    "serviceStatus":"Service Status",
    "status": "Status"
  }

  get displayColumnWithActions() {
    return [...this.displayedColumns, 'actions'];
  }

  ngOnInit(): void {
    this.integrationService.getData().subscribe({
      next : (data) =>{
        this.dataSource = data;
      },
      error: (error) => {
        console.log("Error fetching data:", error)
      },
      complete: () =>{
        console.log("successfull");
      }
    })
  }

  editRow(row: any){
    console.log(row);

  }

  handleFileSelect(evt:any) {
    var file = evt.target.files[0]; // FileList object
    if(file) {
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
      return this.headers.reduce((acc,header, index) => {
        acc[header] = values[index] || "";
        return acc;
      },{} as any);
    })
  }

}
