import { PageEvent } from '@angular/material/paginator';
import { Sort } from '@angular/material/sort';

export class Pageable {
  page: number | undefined = 0;
  size: number | undefined = 5;
  totalElements? : number;
  sort?: string;

  setSort(sort: Sort): void {
    this.sort = sort.active + ',' + sort.direction;
  }

  setPage(pageEvent: PageEvent | undefined): void {
    this.page = pageEvent?.pageIndex;
    this.size = pageEvent?.pageSize;
  }
}
