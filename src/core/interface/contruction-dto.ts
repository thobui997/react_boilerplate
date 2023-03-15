import { PhoneNumber } from './phone-number';

export interface ConstructionDto {
  Id: string;
  TenCoSoCongTrinh: string;
  LocationDetail: string;
  SoDienThoai: PhoneNumber[];
}
