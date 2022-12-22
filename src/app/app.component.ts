import { Component, Inject } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

export interface Student {
  name: string;
  year: number;
  department: string;
}

const ELEMENT_DATA: Student[] = [
  {name: 'Swati', year: 3, department: 'CSE'},
  {name: 'Nachiket', year: 2, department: 'CSE'},
  {name: 'Gunjan', year: 3, department: 'PROD'},
  {name: 'Rutuja', year: 1, department: 'CHEM'},
  {name: 'Harshal', year: 2, department: 'IT'},
  {name: 'Pranoti', year: 4, department: 'MECH'},
  {name: 'Vidhya', year: 1, department: 'CHEM'},
  {name: 'Janhavi', year: 1,department: 'CSE'},
  {name: 'Sakshi', year: 3, department: 'ENTC'},
  {name: 'Nayan', year: 3, department: 'PROD'},
];


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})





export class AppComponent {
  title = 'my-app';
  displayedColumns: string[] = ['name', 'year', 'department', 'cgpa'];
  dataSource = ELEMENT_DATA;
}
