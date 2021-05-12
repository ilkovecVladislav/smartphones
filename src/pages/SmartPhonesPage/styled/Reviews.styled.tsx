import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  padding-bottom: 25px;
  margin-bottom: 20px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray[200]};
`;

export const LeftPart = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 10px;
  width: 25%;
  flex-grow: 0;
  flex-shrink: 0;
`;

export const Name = styled.span`
  font-size: 15px;
  margin-bottom: 3px;
`;

export const DateLabel = styled.span`
  margin-bottom: 12px;
  color: ${({ theme }) => theme.colors.gray[400]};
`;

export const RightPart = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 10px;
  width: 75%;
  flex-grow: 0;
  flex-shrink: 0;
`;

export const FeedBack = styled.div`
  display: flex;
  align-items: center;
`;

export const FeedBackLabel = styled.span`
  font-size: 15px;
  margin-right: 10px;
`;

export const Mark = styled.p`
  margin-right: 10px;

  & .icon {
    cursor: pointer;
    color: ${({ theme }) => theme.colors.gray[500]};
    fill: transparent;
    margin-right: 8px;
    transition: color 0.3s, fill 0.3s;
  }

  & .icon.like:hover,
  & .like.active {
    color: ${({ theme }) => theme.colors.green[300]};
    fill: ${({ theme }) => theme.colors.green[300]};
  }

  & .icon.dislike:hover,
  & .dislike.active {
    color: ${({ theme }) => theme.colors.red[400]};
    fill: ${({ theme }) => theme.colors.red[400]};
  }

  & .amount {
    font-size: 15px;
    line-height: 17px;
    color: ${({ theme }) => theme.colors.gray[500]};
  }
`;
