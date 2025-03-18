import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { PeriodicElement } from '../../model/gridData.modal';
import { IntegrationService } from '../../services/integration.service';

@Component({
  selector: 'app-datagrid',
  imports: [CommonModule, MatTableModule, MatButtonModule, MatIconModule],
  templateUrl: './datagrid.component.html',
  styleUrl: './datagrid.component.css'
})
export class DatagridComponent implements OnInit {

  constructor(private integrationService:IntegrationService){}

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

  columnHeaders: {[key:string]:string} = {
    "hubCode": "Hub Code",
    "hubName":"Hub Name",
    "hubType":"Hub Type",
    "city":"City",
    "state":"State",
    "serviceStatus":"Service Status",
    "status": "Status",
    "messageStatus": "Message Status",
    "source": "source"
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

  submitRow(rowData: PeriodicElement) {
    this.integrationService.submitRowData(rowData).subscribe({
      next: (response) => {
        alert(`Success:${response.message} (ID: ${response.id})`);
      },
      error:() =>{
        console.log("something went wrong");
      }
    })
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
