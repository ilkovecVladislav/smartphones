import styled from '@emotion/styled';

export const Container = styled.form`
  width: 25%;
`;

export const Box = styled.div`
  width: 325px;
  padding: 10px;
  margin-right: 10px;
`;

export const FiltersContent = styled.div`
  max-width: 295px;
  padding-bottom: 75px;
`;

export const FiltersTitle = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray[200]};
  font-size: 21px;
  padding-bottom: 10px;

  span {
    font-family: 'OfficinaSerifBook', sans-serif;
    margin-right: 6px;
  }
`;

export const ColorFilterContent = styled.span`
  display: flex;
  margin-left: 12px;
  font-size: 14px;
  line-height: 20px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.black[400]};
`;

export const ColorCircle = styled.span<{ color: string }>`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  flex: 0 0 auto;
  background-color: ${({ color }) => color};
  box-shadow: inset 0 1px 4px 0 rgb(0 0 0 / 25%);
  margin-right: 10px;
`;

export const PriceFilterWrapper = styled.div`
  padding-bottom: 15px;
  padding-top: 5px;
`;
