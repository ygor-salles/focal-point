'use client';

import { useCallback, useState } from 'react';

import { Button } from '@components/Button';

import { ModalToDeleteTask } from '../ModalToDeleteTask';
import { ModalToRegisterTask } from '../ModalToRegisterTask';
import { TaskCard } from '../TaskCard';
import { TypeModalHome } from './types';

export function ContentHome() {
  const [openModal, setOpenModal] = useState<TypeModalHome>('stand-by');
  const openModalRegister = openModal === 'register';
  const openModalDelete = openModal === 'delete';

  const handleCloseModal = useCallback(() => {
    setOpenModal('stand-by');
  }, []);

  const handleOpenModalRegister = () => setOpenModal('register');

  const handleOpenModalDelete = () => setOpenModal('delete');

  return (
    <>
      <TaskCard />
      <Button variant="primary" type="button" onClick={handleOpenModalRegister}>
        Adicionar nova tarefa
      </Button>
      <ModalToRegisterTask open={openModalRegister} onClose={handleCloseModal} />
      <ModalToDeleteTask open={openModalDelete} onClose={handleCloseModal} />
    </>
  );
}
