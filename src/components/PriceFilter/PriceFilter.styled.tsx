import styled from '@emotion/styled';

export const Container = styled.div`
  display: block;
  width: 260px;
`;

export const InputRange = styled.input`
  max-width: 88px;
  height: 43px;
  border: 1px solid hsla(0, 0%, 67%, 0.45);
  border-radius: 3px;
  box-shadow: inset 0 2px 1px 0 rgba(0, 0, 0, 0.13);
  padding: 0 9px;
  text-indent: 6px;
  text-align: left;
  outline: none;

  &::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    appearance: none;
    margin: 0;
  }

  &:focus {
    border-color: rgba(249, 195, 91, 0.9);
    box-shadow: inset 0 0 0 1px rgba(249, 195, 91, 0.9);
    transition: border-color 0.3s, box-shadow 0.3s;
  }
`;

export const FilterPoints = styled.input`
  pointer-events: none;
  position: absolute;
  height: 0;
  width: 260px;
  outline: none;
  z-index: 5;
  appearance: none;

  &::-webkit-slider-thumb {
    appearance: none;
    position: relative;
    background-color: #fff;
    border: 1px solid #c8c8c8;
    border-radius: 50%;
    box-shadow: 0 1px 5px 0 rgba(0 0 0, 25);
    cursor: pointer;
    height: 24px;
    width: 24px;
    margin-top: 12px;
    pointer-events: all;
  }

  &-left {
    margin-left: -5px;
  }
`;

export const SliderContainer = styled.div`
  position: relative;
  width: 260px;
`;

export const SliderRange = styled.div`
  position: absolute;
  border-radius: 5px;
  height: 12px;
  background-color: #ced4da;
  width: 100%;
  z-index: 1;
`;

export const SliderBetween = styled.div`
  position: absolute;
  background: linear-gradient(rgb(246, 193, 100), rgb(246, 193, 100) 60%, rgb(253, 207, 112));
  z-index: 2;
  border-radius: 5px;
  height: 12px;
`;

export const SliderLeft = styled.div`
  position: absolute;
  color: rgb(120, 120, 120);
  font-size: 12px;
  margin-top: 20px;
  left: -5px;
`;

export const SliderRight = styled.div`
  position: absolute;
  color: rgb(120, 120, 120);
  font-size: 12px;
  margin-top: 20px;
  right: -4px;
`;

export const InputContainer = styled.div`
  display: flex;
  width: 260px;
  justify-content: space-around;
  padding-top: 50px;

  & .separator {
    text-align: center;
    margin: 0 4px;
    line-height: 2.8;
  }

  & .currency {
    text-align: center;
    margin-left: -5px;
    font-size: 18px;
    line-height: 2.6;
    font-family: 'OfficinaSerifBook', sans-serif;
  }
`;
