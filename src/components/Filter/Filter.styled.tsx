import styled from '@emotion/styled';

export const Container = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray[200]};
`;

export const LabelButton = styled.div`
  padding: 15px 0;
  outline: none;
  border: none;
  background-color: transparent;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.black[400]};
  transition: color 0.3s;
  display: flex;
  align-items: center;
  font-family: 'OfficinaSerifBook', sans-serif;

  & .closed {
    transform: rotate(180deg);
  }

  & span:last-of-type {
    transition: transform 0.3s;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.orange[600]};
    span:first-of-type {
      border-color: ${({ theme }) => theme.colors.orange[600]};
    }
  }
`;

export const LabelText = styled.span`
  font-size: 17px;
  position: relative;
  border-bottom: 1px dashed ${({ theme }) => theme.colors.gray[400]};
  transition: border-color 0.3s;
  margin-right: 8px;
`;

export const ExtendButton = styled(LabelButton)`
  padding-top: 0;
`;

export const FilterBox = styled.div`
  display: flex;
`;

export const FilterItemWrapper = styled.div`
  margin-bottom: 1px;
  padding-right: 10px;
`;

export const FilterItem = styled.div`
  flex: 0 0 100%;
  cursor: pointer;
  margin: 7px 0;
`;
