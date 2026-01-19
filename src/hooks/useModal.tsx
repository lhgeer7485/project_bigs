import { useState } from "react";

const useModal = () => {
  const [isCreateModal, setIsCreateModal] = useState(false);
  const [isUpdateModal, setIsUpdateModal] = useState(false);

  const onOpenCreateModal = () => setIsCreateModal(true);
  const onCloseCreateModal = () => setIsCreateModal(false);

  const onOpenUpdateModal = () => setIsUpdateModal(true);
  const onCloseUpdateModal = () => setIsUpdateModal(false);

  return {
    isCreateModal,
    isUpdateModal,
    onOpenCreateModal,
    onOpenUpdateModal,
    onCloseCreateModal,
    onCloseUpdateModal,
  };
};

export default useModal;
