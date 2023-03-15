import { Modal } from 'antd';
import { BaseModal } from 'core/interface/base-modal';
import { t } from 'i18next';
import React, { ReactNode } from 'react';

interface ModalComponentProps extends BaseModal {
  className?: string;
  title: string;
  children: ReactNode;
  handleOk: () => any;
  width?: number;
  cancelText?: string;
  okText?: string;
  confirmLoading?: boolean;
  footer?: ReactNode;
}

const ModalComponent = (props: ModalComponentProps) => {
  const {
    title,
    width = 600,
    isModalOpen,
    hide,
    cancelText = t('CloseBtn'),
    okText = t('AddBtn'),
    children,
    handleOk,
    confirmLoading = false,
    className,
    footer,
  } = props;

  const footerProp = {
    ...(footer && { footer: [footer] }),
  };

  return (
    <Modal
      className={className}
      centered
      destroyOnClose
      bodyStyle={{ padding: '16px' }}
      width={width}
      confirmLoading={confirmLoading}
      title={title}
      open={isModalOpen}
      cancelText={cancelText}
      okText={okText}
      onCancel={() => hide()}
      onOk={handleOk}
      {...footerProp}
    >
      {children}
    </Modal>
  );
};

export default ModalComponent;
