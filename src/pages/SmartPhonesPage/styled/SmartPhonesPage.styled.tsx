import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

export const Container = styled.div`
  max-width: 1280px;
  width: 100%;
  margin: 0 auto;
  display: flex;

  & .reset-enter,
  & .scroll-to-top-enter {
    opacity: 0;
    transform: translateY(10px);
  }

  & .reset-enter-active,
  & .scroll-to-top-enter-active {
    opacity: 1;
    transform: translateY(0);
    transition: opacity 300ms, transform 300ms;
  }

  & .reset-exit,
  & .scroll-to-top-exit {
    opacity: 1;
    transform: translateY(0);
  }

  & .reset-exit-active,
  & .scroll-to-top-exit-active {
    opacity: 0;
    transform: translateY(10px);
    transition: opacity 400ms, transform 400ms;
  }
`;

export const ViewButton = styled.button`
  background-color: unset;
  color: ${({ theme }) => theme.colors.gray[400]};
  border-radius: 2px;
  box-shadow: 0 0 0 1px ${({ theme }) => theme.colors.gray[300]};
  cursor: pointer;
  border: none;
  transition: box-shadow 0.3s ease-out, color 0.3s ease;
  display: inline-block;
  width: 32px;
  height: 28px;

  &:hover {
    color: ${({ theme }) => theme.colors.black[400]};
  }

  &:first-of-type {
    margin-right: 15px;
  }

  &.active {
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.orange[700]};
    cursor: default;
    color: ${({ theme }) => theme.colors.black[400]};
  }
`;

export const ParamsContainer = styled.div`
  display: flex;
  margin-bottom: 20px;
`;

export const ViewButtonsContainer = styled.div`
  margin-right: 20px;
`;

export const SortingContainer = styled.div`
  display: flex;
`;

export const SortingLabel = styled.span`
  margin-right: 10px;
`;

export const SortingButton = styled(ViewButton)`
  padding: 0 8px;
  text-align: center;
  white-space: nowrap;
  width: auto;
  line-height: 23px;
`;

export const PriceSortingButton = styled(ViewButton)`
  padding: 0 8px;
  text-align: center;
  white-space: nowrap;
  width: auto;
  line-height: 23px;

  span {
    padding-right: 5px;
  }

  &.active {
    cursor: pointer;
  }
`;

export const Title = styled.h1`
  font-size: 50px;
  line-height: 1.12;
  margin-bottom: 20px;
  font-weight: 400;
  font-family: 'OfficinaSerifBook', sans-serif;
`;

export const Content = styled.div`
  width: 75%;
  padding: 0 10px;
`;

export const ListContainer = styled.div`
  display: grid;
  grid-auto-flow: dense;
  grid-auto-rows: auto;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 1px;
`;

export const PaginationContainer = styled.div`
  padding-top: 20px;
  padding-bottom: 30px;
  display: flex;
  justify-content: center;
`;

const spinner = keyframes`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(359deg);
  }
`;

export const SpinnerContainer = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  text-align: center;

  span {
    animation-name: ${spinner};
    animation-duration: 1s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
  }
`;

export const ResetButton = styled.button`
  height: 56px;
  width: 295px;
  margin-top: 10px;
  font-family: Roboto, sans-serif;
  background-color: ${({ theme }) => theme.colors.white[400]};
  bottom: 15px;
  position: fixed;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: none;
  box-shadow: 0 2px 6px 0 rgb(0 0 0 / 18%);

  &:hover .icon {
    color: ${({ theme }) => theme.colors.orange[700]};
  }

  &:hover .text {
    color: ${({ theme }) => theme.colors.orange[700]};
    border-color: ${({ theme }) => theme.colors.orange[700]};
  }

  & .icon {
    color: ${({ theme }) => theme.colors.gray[400]};
    margin-right: 5px;
    transition: color 0.3s ease;
  }

  & .text {
    transition: color 0.3s ease, border-color 0.3s ease;
    border-bottom: 1px dashed ${({ theme }) => theme.colors.gray[400]};
  }
`;

export const ScrollButton = styled.button`
  cursor: pointer;
  border: none;
  background-color: transparent;
  position: fixed;
  width: 80px;
  right: 0;
  bottom: 70px;
  z-index: 100;
  height: 57px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
