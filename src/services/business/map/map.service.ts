import httpClient from 'services/http-client';
import { HeatMapPayload } from './map.model';

export const PREFIX_BUSINESS = '/business/api/Map';

const getHeatMap = (payload: HeatMapPayload) => {
  return httpClient.post(`${PREFIX_BUSINESS}/getHeatMap`, payload);
};

const MapService = {
  getHeatMap,
};

export default MapService;
