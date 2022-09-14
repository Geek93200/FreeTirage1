import { Component, } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';
import {MatTableDataSource} from '@angular/material/table';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {
  title = 'FreeTirage1';
  
  constructor(private dialog : MatDialog){

  }

  openDialog() {
    this.dialog.open(DialogComponent, {
      width:'30%'
    });
  }
}


  
