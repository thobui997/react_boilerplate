import { DiaChi } from './location';

export interface FireTruckDto {
  Id: string;
  TenPhuongTien: string;
  LoaiPhuongTien: string;
  SoHieuPhuongTien: string;
  TinhTrangHoatDong: string;
  BienSo: string;
  TrucThuoc: string;
  DonVi: string;
  SoDienThoai: string;
  Imei: string;
  Users: string;
  Available: string;
  Longitude: number;
  Latitude: number;
  LocationDetail: string;
  FireProtectionId: string;
  Manager: string;
  UsedDate: string;
  ExpireDate: string;
  Note: string;
  PcccUnitName: string;
  NameCode: string;
  Location: DiaChi;
}
