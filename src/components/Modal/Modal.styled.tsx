import styled from '@emotion/styled';

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 100%;
  background: rgba(28, 33, 47, 0.5);
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.div`
  font-size: 21px;
  font-family: 'OfficinaSerifBook', sans-serif;
`;

export const CloseButton = styled.button`
  background-color: transparent;
  width: 20px;
  height: 20px;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: color 0.3s;

  &:hover {
    color: ${({ theme }) => theme.colors.orange[400]};
  }
`;

export const ModalContainer = styled.div`
  position: relative;
  overflow-y: auto;
  min-width: 400px;
  max-width: 960px;
  max-height: calc(100vh - 50px);
  background-color: ${({ theme }) => theme.colors.white[400]};
  border-radius: 4px;
  padding: 20px 25px;
`;

export const MainContainer = styled.div`
  margin: 40px 0px 34px 0px;
`;
