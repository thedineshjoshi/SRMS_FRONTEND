import { Component, OnInit } from '@angular/core';
import { ApiCallService } from '../../service/api-call.service';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { PaginatorModule } from 'primeng/paginator';

interface PageEvent {
  first: number;
  rows: number;
  page: number;
  pageCount: number;
}

@Component({
  selector: 'app-student-list',
  standalone: true,
  imports: [
    CommonModule,
    TableModule,
    ButtonModule,
    PaginatorModule
  ],
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.css'
})
export class StudentListComponent implements OnInit {
  items: any[] = [];
  currentPage: number = 1;
  pageSize: number = 10; // Changed to 10 to match the paginator default
  totalItems: number = 0;
  first:number = 0;
  rows:number =10;

  constructor(private service: ApiCallService) {}

  ngOnInit(): void {
    this.listStudents();
  }

  listStudents() {
    this.service.getStudents(this.currentPage, this.pageSize).subscribe(
      res => {
        this.items = res.items || [];
        this.totalItems = res.totalItems || 0;
      },
      err => {
        console.log(err);
      }
    );
  }

  get totalPages(): number {
    const pages = Math.ceil(this.totalItems / this.pageSize);
    return isNaN(pages) || pages < 1 ? 1 : pages;
  }

  


  onPageChange(event: PageEvent) {
    this.first = event.first;
    this.rows = event.rows;
  }
}
