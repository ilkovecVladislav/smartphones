import styled from '@emotion/styled';

export const Container = styled.ul`
  display: flex;
`;

export const Item = styled.li`
  font-size: 16px;
  line-height: 19px;
  transition: all 0.3s ease-out;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  padding-top: 9px;
  color: #282828;
  text-align: center;
  cursor: pointer;

  &:hover {
    color: #ffb612;
  }

  &.active {
    background-color: #ffb612;
    box-shadow: inset 0 2px 1px 0 rgb(0 0 0 / 13%);
    cursor: default;

    span {
      border-bottom: none;
    }

    &:hover {
      color: #282828;
    }
  }
`;

export const PageNumber = styled.span`
  border-bottom: 1px dotted currentColor;
  font-size: 16px;
  line-height: 19px;
`;

export const EmptyItem = styled.li`
  vertical-align: top;
  width: 36px;
  height: 36px;
  text-align: center;
  font-size: 16px;
  line-height: 36px;
`;

export const NavigationButton = styled.button`
  display: inline-block;
  vertical-align: top;
  margin: 0 12px;
  width: 36px;
  height: 36px;
  background: #f5f5f3;
  border-radius: 50%;
  position: relative;
  cursor: pointer;
  user-select: none;
  transition: all 0.3s ease-out;
  border: 2px solid #f5f5f3;

  &:hover {
    color: #ffb612;
    border-color: #ffb612;
    background: none;
  }

  &:disabled {
    cursor: default;
    color: #c9c9c9;
    background: #f5f5f3;
    border-color: #f5f5f3;
  }

  & .previous {
    transform: rotate(90deg);
  }

  & .next {
    transform: rotate(-90deg);
  }
`;
