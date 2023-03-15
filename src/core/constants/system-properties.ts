export const SYSTEM_PROPERTIES = {
  PHONE_PATTERN: /^((09|03|07|08|05)+([0-9]{8})\b)$/g,
  EMAIL_PATTERN:
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}])|(([a-zA-Z\-\d]+\.)+[a-zA-Z]{2,}))$/g,
  CITIZEN_IDENTIFY_PATTERN: /^[0-9]{9}$|^[0-9]{12}$/g,
  PASSWORD: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/g,
  USERNAME: /^^(?=.{4,20}$)/g,
};
