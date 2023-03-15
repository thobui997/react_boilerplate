import { ExclamationCircleFilled } from '@ant-design/icons';
import { QueryClient, UseMutationResult } from '@tanstack/react-query';
import { Modal } from 'antd';
import { AxiosResponse } from 'axios';
import { t } from 'i18next';
import showNotification from 'utils/show-notification';

const { confirm } = Modal;
const showConfirmDeleteModal = (
  name = '',
  id: string,
  deleteService: UseMutationResult<AxiosResponse<any, any>, unknown, string, unknown>,
  queryClient: QueryClient,
  key: string,
) => {
  confirm({
    title: 'Xác nhận xóa?',
    icon: <ExclamationCircleFilled />,
    content: 'Bạn có chắc chắn muốn xóa: ' + name,
    okText: 'Xóa',
    okType: 'danger',
    cancelText: 'Đóng',
    onOk() {
      deleteService
        .mutateAsync(id)
        .then((_) => {
          showNotification('success', t('notification.success'), `${name} đã được xoá`);
          queryClient.invalidateQueries({ queryKey: [key] });
        })
        .catch((_) => {
          showNotification('error', t('notification.error'), `${name} đã xoá không thành công`);
        });
    },
  });
};
export default showConfirmDeleteModal;
