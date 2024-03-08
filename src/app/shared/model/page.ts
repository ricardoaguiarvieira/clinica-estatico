export class Page<T> {
  content: any[] = [];
  last?: boolean;
  totalElements?: number;
  totalPages?: number;
  size?: number;
  number?: number;
  numberOfElements?: number;
  sort?: string;
  page?: number;
  first?: boolean;
}
