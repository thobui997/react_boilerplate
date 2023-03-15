import { useQueryClient } from '@tanstack/react-query';
import { t } from 'i18next';
import { showNotification } from 'utils';

const useShowNotification = () => {
  const queryClient = useQueryClient();

  const handleSuccess = (desc: string, queryKey?: string, hideModal?: () => void) => {
    showNotification('success', t('notification.success'), desc);
    if (queryKey) queryClient.invalidateQueries({ queryKey: [queryKey] });
    if (hideModal) hideModal();
  };

  const handleError = (desc: string) => {
    showNotification('error', t('notification.error'), desc);
  };

  return { handleSuccess, handleError };
};

export default useShowNotification;
