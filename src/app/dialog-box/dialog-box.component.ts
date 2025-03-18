//dialog-box.component.ts
import { CommonModule } from '@angular/common';
import { Component, Inject, Optional } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { PeriodicElement } from '../model/gridData.modal';
import { IntegrationService } from '../services/integration.service';

@Component({
  imports: [CommonModule, MatTableModule, MatButtonModule, MatIconModule, MatFormFieldModule,
    MatDialogModule, MatInputModule, ReactiveFormsModule, FormsModule],
  selector: 'app-dialog-box',
  templateUrl: './dialog-box.component.html',
  styleUrls: ['./dialog-box.component.scss']
})
export class DialogBoxComponent {

  action:string;
  local_data:any;
  dataSource: PeriodicElement[] = [];
  searchHubData: any;
  
  constructor(
    public dialogRef: MatDialogRef<DialogBoxComponent>,
    //@Optional() is used to prevent error if no data is passed
    @Optional() @Inject(MAT_DIALOG_DATA) public data: PeriodicElement, private integrationService:IntegrationService) {
    console.log(data);
    this.local_data = {...data};
    this.action = this.local_data.action;
  }

  doAction(){
    this.dialogRef.close({event:this.action,data:this.local_data});
  }

  fetchData(inputData: any) {
    // this.dummyData.find(PeriodicElement => PeriodicElement.hubCode == data);
    this.integrationService.getHubData(inputData).subscribe({
      next : (data) =>{
        // console.log('fetchData=====>', data.find((hubSingle: any) => hubSingle.hubCode === inputData));
        this.searchHubData = data.find(hubSingle => hubSingle.hubCode === inputData);
        return this.searchHubData;
      },
      error: (error) => {
        console.log("Error fetching data:", error)
      },
      complete: () =>{
        console.log("successfull");
      }
    })
  }

  closeDialog(){
    this.dialogRef.close({event:'Cancel'});
  }

}
