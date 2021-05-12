import { FC, useCallback, useEffect, useRef, ChangeEvent } from 'react';

import {
  Container,
  InputRange,
  FilterPoints,
  SliderContainer,
  SliderRange,
  SliderBetween,
  SliderLeft,
  SliderRight,
  InputContainer,
} from './PriceFilter.styled';

type Props = {
  min: number;
  max: number;
  value: {
    min: number;
    max: number;
  };
  onChange: (value: { min: number; max: number }) => void;
};

const MultiRangeSlider: FC<Props> = ({ min, max, value, onChange }) => {
  const { min: minVal, max: maxVal } = value;

  const rangeRef = useRef<HTMLDivElement>(null);
  const minRef = useRef(min);
  const maxRef = useRef(max);

  const convertToPercentage = useCallback(
    (val: number) => Math.round(((val - min) / (max - min)) * 100),
    [min, max],
  );

  useEffect(() => {
    const minPercent = convertToPercentage(minRef.current);
    const maxPercent = convertToPercentage(maxVal);

    if (rangeRef.current) {
      rangeRef.current.style.width = maxVal > max ? '260px' : `${maxPercent - minPercent}%`;
    }
  }, [convertToPercentage, max, maxVal]);

  useEffect(() => {
    const minPercent = convertToPercentage(minVal);
    const maxPercent = convertToPercentage(maxRef.current);

    if (rangeRef.current) {
      rangeRef.current.style.left = minVal > max ? '0px' : `${minPercent}%`;
      rangeRef.current.style.width = minVal > max ? '260px' : `${maxPercent - minPercent}%`;
    }
  }, [convertToPercentage, max, minVal]);

  const onChangeMin = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = Number(event.target.value);
    onChange({ ...value, min: newValue });
    minRef.current = newValue;
  };

  const onChangeMax = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = Number(event.target.value);
    onChange({ ...value, max: newValue });
    maxRef.current = newValue;
  };

  return (
    <Container>
      <FilterPoints type="range" value={minVal} min={min} max={max} onChange={onChangeMin} />
      <FilterPoints type="range" min={min} max={max} value={maxVal} onChange={onChangeMax} />

      <SliderContainer>
        <SliderRange />
        <SliderBetween ref={rangeRef} />
        <SliderLeft>{min}</SliderLeft>
        <SliderRight>{max}</SliderRight>
      </SliderContainer>

      <InputContainer>
        <InputRange
          type="number"
          placeholder={min.toString()}
          value={minVal}
          onChange={onChangeMin}
        />
        <span className="separator">—</span>
        <InputRange
          type="number"
          placeholder={max.toString()}
          value={maxVal}
          onChange={onChangeMax}
        />
        <span className="currency">₽</span>
      </InputContainer>
    </Container>
  );
};

export default MultiRangeSlider;
