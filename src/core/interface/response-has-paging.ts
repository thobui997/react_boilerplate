export interface ResponseWithPaging<T> {
  Data: T;
  TotalItems: number;
  CurrentPage: number;
  PageSize: number;
  TotalPages: number;
}
