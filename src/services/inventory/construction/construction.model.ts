import { DiaChi } from 'core/interface/location';

export interface ConstructionPayLoad {
  Name: string;
  Code: string;
  Location: DiaChi;
  PcccUnitId: string;
  FromDate: string;
  ToDate: string;
  IndustryField: number;
  ActivityType: number;
  LocationDetail: string;
  CustomerId: string;
  CustomerLst: string[];
  ConstructionIdLst: string[];
  IndustryFields: string;
  ConstructionChecked: string[];
  ConstructionCheckingPlanId: string;
  Evaluate: string;
  IsConstructionDigitized: boolean;
}

export interface Construction {
  Id: string;
  MaCoSoCongTrinh: string;
  TenCoSoCongTrinh: string;
  HuongVaoTiepCanCSCT: string;
  LoaiHinhSoHuu: string;
  DonViPcccID: string;
  LocationDetail: string;
  ChuCSCT: string;
  RegisterDate: string;
  ExpiredDate: string;
  CapQuanLy: string;
  SoDienThoai: SoDienThoai[];
  InspectionOfficerId: string;
  CanBoKiemTra: string;
  LoaiHinhHoatDong: string;
  ThanhPhanKinhTe: string;
  NamThanhLap: number;
  Email: string;
  HinhThucDauTu: string;
  NghanhLinhVuc: string;
  Website: string;
  BaoHiemChayNo: string;
  Longitude: number;
  Latitude: number;
  ApprovePcccDate: string;
  AprroveOperateDate: string;
  CustomerId: string;
  CustomerName: string;
  PcccUnitName: string;
  CheckedDate: string;
  ResultCheckedDate: string;
  CheckedContent: string;
  CheckedCount: string;
  CheckingDto: string;
  Note: string;
  Checker: string;
  CheckerListName: string;
  CheckerName: string;
  DeviceInstall: string;
  FileNameUrl: string;
  InstallUnit: string;
  AlertWrong: string;
  DeviceOffline: string;
  DeviceBatteryLow: string;
  AlertDelay: string;
  ProcessStatusFiring: string;
  ViolationStatus: string;
  DeviceErrorStatus: string;
  AreaManagerName: string;
  IsApprove: string;
  DelayTime: string;
  Location: DiaChi;
}

export interface SoDienThoai {
  PhoneNumber: string;
  FullName: string;
  Info: string;
  PhoneNumberType: string;
}
