import { FireFighterDto } from 'core/interface/fire-fighter-dto';
import { PcccUnitDto } from 'core/interface/pccc-unit-dto';

export interface DutySchedule {
  Id: string;
  DutyDate: string;
  PcccUnitId: string;
  PcccUnitDto: PcccUnitDto;
  Note: string;
  DutyListItem: DutyListItem[];
  Leave: string;
}

export interface DutyListItem {
  Id: string;
  Name: string;
  FireFighterIds: string;
  Group: Group[];
  FireFighterDto: string;
  FireFighterGroupIds: string[];
}

export interface Group {
  Id: string;
  Name: string;
  FireFighterIds: string[];
  FireFighterDto: FireFighterDto[];
}

export interface DutyScheduleFilterPayload {
  Note: string;
  PcccUnitId: string;
  SearchDate: string;
}
