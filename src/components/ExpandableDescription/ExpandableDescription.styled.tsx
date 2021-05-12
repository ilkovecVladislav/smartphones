import styled from '@emotion/styled';

export const Container = styled.div`
  width: 100%;
  margin-bottom: 12px;
`;

export const Text = styled.p`
  font-size: 15px;
  margin-bottom: 12px;
`;

export const LearnMoreLink = styled.p`
  cursor: pointer;
  font-size: 15px;
  line-height: 24px;

  span {
    transition: color 0.3s, border-color 0.3s;
    border-bottom: 1px dashed ${({ theme }) => theme.colors.gray[400]};
  }

  &:hover span {
    color: ${({ theme }) => theme.colors.orange[400]};
    border-color: ${({ theme }) => theme.colors.orange[400]};
  }
`;
