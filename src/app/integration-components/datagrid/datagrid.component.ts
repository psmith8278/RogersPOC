import { Component, OnInit, ViewChild} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTable, MatTableModule} from '@angular/material/table';
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

  constructor(private integrationService:IntegrationService, public dialog: MatDialog){

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

  openDialog(action: any, obj:any,) {
    // const index = ELEMENT_DATA.findIndex(item => item.Hub_Code === action.Hub_Code);
    // if(index > -1) {
    //   ELEMENT_DATA[index] = action;
    // }
    obj.action = action;
    const dialogRef = this.dialog.open(DialogBoxComponent, {
      width: 'max-content',
      data:obj
    });

    dialogRef.afterClosed().subscribe((result: { event: string; }) => {
      console.log(result);
      if(result.event == 'Add'){
        this.addRowData(result);
      }else if(result.event == 'Update'){
        this.updateRowData(result);
      }else if(result.event == 'Delete'){
        //this.deleteRowData(result.data);
      }
    });
  }

  updateRowData(row_obj : any){
    console.log('updateRowData====>', this.dataSource);
    this.dataSource = this.dataSource.filter((value,key)=>{
      console.log(value.hubId, row_obj.data.hubId);
      if(value.hubId == row_obj.data.hubId){
        value.hubName = row_obj.data.hubName;
        value.city = row_obj.data.city;
        value.zipCode = row_obj.data.zipCode;
        value.addr1 = row_obj.data.addr1;
 
        this.integrationService.updateData(value).subscribe({
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
      return true;
    });
  }

  addRowData(row_obj : any){
    console.log('updateRowData====>', this.dataSource);
    var d = new Date();
    this.dataSource.push({
      hubId: d.getTime(),
      hubName: row_obj.data.hubName,
      hubCode: '',
      hubType: '',
      primaryHubId: '',
      addr1: 'test',
      addr2: 'test2',
      city: 'ch',
      state: 'tn',
      zipCode: '88',
      serviceStatus: 'A',
      lattitude: '',
      logitude: '',
      parentBuhmId: '',
      status: ''
    });
    this.table.renderRows();
  }

}
