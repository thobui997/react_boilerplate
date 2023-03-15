import { Time } from 'core/constants/time';
import dayjs from 'dayjs';

const formatDate = (date: string, format = Time.DATE_FORMAT) => {
  if (!date) return;
  return dayjs().format(format);
};

export default formatDate;
