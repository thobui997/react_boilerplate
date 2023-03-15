import httpClient from 'services/http-client';
import { FireBaseRegister } from './notifications.model';

export const PREFIX_FACT = '/handler/api/Notifications';

const findById = (payload: FireBaseRegister) => {
  return httpClient.post(`${PREFIX_FACT}/fb-register`, payload);
};

const NotificationService = {
  findById,
};

export default NotificationService;
