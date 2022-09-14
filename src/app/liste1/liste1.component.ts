import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { Liste1DataSource, Liste1Item } from './liste1-datasource';

@Component({
  selector: 'app-liste1',
  templateUrl: './liste1.component.html',
  styleUrls: ['./liste1.component.scss']
})
export class Liste1Component implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<Liste1Item>;
  dataSource: Liste1DataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name', 'id_Tirage', "action"];

  constructor() {
    this.dataSource = new Liste1DataSource();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
