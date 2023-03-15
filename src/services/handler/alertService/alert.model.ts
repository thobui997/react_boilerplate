import { Dayjs } from 'dayjs';
export interface Alert {
  AlertDeviceTime: Dayjs;
  AlertServerTime: Dayjs;
  AlertTypes: number[];
  Construction: string;
  Customer: null;
  DeleteFlag: boolean;
  DeviceImei: string;
  DeviceName: string;
  EndTime: Dayjs;
  Id: string;
  ProcessStatus: number;
  StartTime: Dayjs;
  TotalDamage: number;
}

export interface FindByImeiParams {
  imei: string;
  startTime?: Dayjs;
  endTime: Dayjs;
}

export interface FindByCustomerParams {
  customerId: string;
  startTime?: Dayjs;
  endTime: Dayjs;
}
