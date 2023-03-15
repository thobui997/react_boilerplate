import { DiaChi } from './location';

export interface Team {
  TeamId: string;
  Name: string;
  MemberCount: number;
  Note: string;
}

export interface PcccUnitDto {
  Id: string;
  TenDonVi: string;
  MaDonVi: string;
  Longitude: number;
  Latitude: number;
  PhoneNumber: string;
  SoDienThoaiTrucBan: string;
  CanBoQuanLy: string;
  Email: string;
  SoDiemLayNuocQuanLy: string;
  SoNhanSuQuanLy: string;
  SoNhanSuChuaChay: string;
  LoaiHinhDonVi: string;
  LocationDetail: string;
  FireTruckCount: number;
  FireFighterCount: number;
  HandleFiring: boolean;
  InManagementArea: string;
  IsDieuDong: string;
  IsAvailable: boolean;
  FireProtectionIds: string;
  FireProtections: string;
  AcceptType: string;
  Teams: Team[];
  Location: DiaChi;
}
