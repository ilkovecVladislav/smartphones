import { ChangeEvent, FC } from 'react';

import { CheckboxContainer, Input, StyledCheckbox, Label } from './Checkbox.styled';

type Props = {
  name: string;
  value?: string;
  label?: string;
  checked: boolean;
  onChange: (value: boolean) => void;
};

const Checkbox: FC<Props> = ({ name, value, label, checked, children, onChange }) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.checked);
  };

  return (
    <CheckboxContainer>
      <Input type="checkbox" name={name} value={value} checked={checked} onChange={handleChange} />
      <StyledCheckbox className="checkbox" />
      {label ? <Label>{label}</Label> : children}
    </CheckboxContainer>
  );
};

export default Checkbox;
