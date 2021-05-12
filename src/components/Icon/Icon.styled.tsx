import styled from '@emotion/styled';

type Props = {
  size: number;
  color?: string;
};

const IconContainer = styled.span<Props>`
  font-size: ${({ size }) => `${size}px`};
  display: inline-block;
  color: inherit;
  font-style: normal;
  line-height: 0;
  text-align: center;
  text-transform: none;
  vertical-align: -0.125em;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;

  & svg {
    width: 1em;
    height: 1em;
  }

  & path {
    fill: ${({ color }) => color};
  }
  & line {
    fill: ${({ color }) => color};
  }
`;

export default IconContainer;
