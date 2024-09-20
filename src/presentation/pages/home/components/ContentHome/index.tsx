'use client';

import { useCallback, useState } from 'react';

import { Button } from '@components/Button';

import { ModalToRegisterTask } from '../ModalToRegisterTask';
import { TaskCard } from '../TaskCard';

export function ContentHome() {
  const [openModal, setOpenModal] = useState(false);

  const handleToggleModal = useCallback(() => setOpenModal(prev => !prev), []);

  return (
    <>
      <TaskCard />
      <Button variant="primary" type="button" onClick={handleToggleModal}>
        Adicionar nova tarefa
      </Button>
      <ModalToRegisterTask open={openModal} onClose={handleToggleModal} />
    </>
  );
}
