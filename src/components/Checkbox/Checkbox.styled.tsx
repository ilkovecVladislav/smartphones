import styled from '@emotion/styled';

import checkedIcon from 'components/Icon/svg/checked.svg';

export const CheckboxContainer = styled.label`
  display: flex;
  cursor: pointer;
  align-items: flex-start;
`;

export const Input = styled.input`
  width: 1px;
  height: 1px;
  overflow: hidden;
  clip: rect(0 0 0 0);
  position: absolute;

  &:checked + .checkbox {
    background-image: ${({ theme }) =>
      `linear-gradient(${theme.colors.orange[500]}, ${theme.colors.yellow[400]})`};

    &::before {
      content: '';
      position: absolute;
      background: url(${checkedIcon});
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;
      width: 10px;
      height: 10px;
      top: 3px;
      left: 3px;
    }
  }
`;

export const StyledCheckbox = styled.span`
  flex-shrink: 0;
  display: block;
  border-radius: 3px;
  width: 15px;
  height: 15px;
  position: relative;
  box-shadow: inset 0 0 0 1px rgb(0 0 0 / 10%);
  background-image: ${({ theme }) =>
    `linear-gradient(${theme.colors.gray[100]}, ${theme.colors.gray[300]})`};
  transition: background-color 0.3s, border-color 0.3s, box-shadow 0.3s;
`;

export const Label = styled.span`
  margin-left: 12px;
  font-size: 14px;
  line-height: 20px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.black[400]};
`;
