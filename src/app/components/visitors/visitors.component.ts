import { Component, OnInit, ViewChild} from '@angular/core';
import {MatLegacyPaginator as MatPaginator} from '@angular/material/legacy-paginator';
import {MatSort} from '@angular/material/sort';
import {MatLegacyTableDataSource as MatTableDataSource} from '@angular/material/legacy-table';
import { DataService } from 'src/app/chat/data.service';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}
@Component({
  selector: 'app-visitors',
  templateUrl: './visitors.component.html',
  styleUrls: ['./visitors.component.scss']
})
export class VisitorsComponent implements OnInit {
  displayedColumns: string[] = ['Id', 'Name', 'Email', 'Message', 'Visited On'];
  dataSource: MatTableDataSource<any> = [] as any;

  @ViewChild(MatPaginator) paginator: MatPaginator = null as any;
  @ViewChild(MatSort) sort: MatSort = null as any;

  constructor(private dataService: DataService) {
  }

  ngOnInit(): void {
    this.dataService.getVisitorsResponse().subscribe({
      next: (res) => {
        console.log({res});
        this.dataSource = new MatTableDataSource(res.data);
      }, 
      error: (err) => {
        console.log({err});
      }
    })
  }
  
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
