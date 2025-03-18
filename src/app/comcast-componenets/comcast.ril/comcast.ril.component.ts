import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { NavbarComponent } from '../../navbar/navbar.component';

@Component({
  selector: 'app-comcast.ril',
  imports: [CommonModule, MatTableModule, MatButtonModule, MatIconModule, MatDialogModule,
    MatFormFieldModule, MatInputModule, NavbarComponent],
  templateUrl: './comcast.ril.component.html',
  styleUrl: './comcast.ril.component.css'
})
export class ComcastRilComponent {

}
