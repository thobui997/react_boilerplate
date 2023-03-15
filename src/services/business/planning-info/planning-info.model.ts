import { FireFighterDto } from 'core/interface/fire-fighter-dto';
import { FireTruckDto } from 'core/interface/fire-truck-dto';
import { DiaChi } from 'core/interface/location';

export interface PlanningInfo {
  Id: string;
  SetUpDate: string;
  PracticeDate: string;
  ConstructionId: string;
  PracticeSituation: string;
  BrowserLevel: string;
  FirePoint: string;
  Comment: string;
  PcccUnits: string[];
  FireFighters: string[];
  FireTrucks: string[];
  PcccUnitDtos: PcccUnitDto[];
  FireFighterDtos: FireFighterDto[];
  FireTruckDtos: FireTruckDto[];
  ConstructionDto: ConstructionDto;
  FireFighterCount: number;
  FireTruckCount: number;
  FileUrl: string;
  Location: DiaChi;
}

export interface PcccUnitDto {
  Name: string;
  Id: string;
}

export interface ConstructionDto {
  Name: string;
  Id: string;
}

export interface PlanningInfoFilterPayload {
  Name: string;
  PracticeSituation: string;
  Location: DiaChi;
  PcccUnitId: string;
  FromDate: string;
  ToDate: string;
  ConstructionName: string;
  ConstructionId: string[];
}
