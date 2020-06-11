import { Component, OnInit, ViewChild } from '@angular/core';
import { BranchofficeService } from 'src/app/services/branchoffice.services'
import { BranchOffice } from 'src/app/model/branchOffice';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
@Component({
  selector: 'app-branchoffice',
  templateUrl: './branchoffice.component.html',
  styleUrls: ['./branchoffice.component.css']
})
export class BranchofficeComponent implements OnInit {

  listbranch = new  MatTableDataSource<BranchOffice>();
  headerbranch: string [] = ['code', 'address','enterpriseNit', 'stateBranchOffice'];
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  constructor(
    private _branchofficeService: BranchofficeService
  ) {
    this._branchofficeService.listbranches().subscribe(
      (a: string) =>{
        this.showbrach();
      }
    );
   }

  ngOnInit(): void {
    this.showbrach();
  }

  showbrach(){
    this._branchofficeService.getBranchoffices().subscribe(response => {
      this.listbranch = new MatTableDataSource<BranchOffice>(response);
      this.listbranch.sort = this.sort;
      this.listbranch.paginator = this.paginator;
    })
  }

  applyFilterbranch(valueFilter: string){
    this.listbranch.filter = valueFilter.trim().toLocaleLowerCase();
  }

}
