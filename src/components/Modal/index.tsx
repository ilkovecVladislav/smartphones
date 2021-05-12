import { FC, useRef, MouseEvent } from 'react';

import Icon from 'components/Icon';
import {
  TitleContainer,
  Title,
  CloseButton,
  ModalContainer,
  MainContainer,
  Wrapper,
} from './Modal.styled';

type Props = {
  isOpen: boolean;
  textConfirm?: string;
  title?: string;
  onClose: () => void;
};

const Modal: FC<Props> = ({ isOpen, children, title, onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  const handleOnClose = (event: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
      onClose();
    }
  };

  return isOpen ? (
    <Wrapper onClick={handleOnClose}>
      <ModalContainer ref={modalRef}>
        <TitleContainer>
          <Title>{title}</Title>
          <CloseButton type="button" onClick={onClose}>
            <Icon name="cross" />
          </CloseButton>
        </TitleContainer>
        <MainContainer>{children}</MainContainer>
      </ModalContainer>
    </Wrapper>
  ) : null;
};

export default Modal;
