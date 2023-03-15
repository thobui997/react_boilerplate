import { useState } from 'react';

interface ModalInfo<T> {
  show: boolean;
  modalId?: number;
  data?: T;
}

const useModal = <T,>() => {
  const [modal, setModal] = useState<ModalInfo<T>>({ show: false });

  const openModal = (modalId: number, data?: any) => {
    setModal({ show: true, modalId, data });
  };

  const hideModal = () => {
    setModal({ show: false });
  };

  return {
    modal,
    openModal,
    hideModal,
  };
};

export default useModal;
