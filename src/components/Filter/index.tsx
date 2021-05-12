import { useState, useMemo, FC, Children, ReactNode } from 'react';
import { nanoid } from 'nanoid';

import Icon from 'components/Icon';
import {
  Container,
  ExtendButton,
  FilterBox,
  FilterItemWrapper,
  FilterItem,
  LabelButton,
  LabelText,
} from './Filter.styled';

const DEFAULT_VIEW_ITEMS = 5;

export type Props = {
  label: string;
  withoutWrappers?: boolean;
  children: ReactNode[];
};

const Filter: FC<Props> = ({ label, withoutWrappers = false, children }) => {
  const [collapsed, setCollapsed] = useState(false);
  const [extend, setExtend] = useState(false);

  const handleCollapse = () => {
    setCollapsed((prevState) => !prevState);
  };

  const handleExtend = () => {
    setExtend(true);
  };

  const formattedChildren: [ReactNode, string][] = useMemo(
    () => children.map((child) => [child, nanoid()]),
    [children],
  );

  return (
    <Container>
      <LabelButton role="button" onClick={handleCollapse}>
        <LabelText>{label}</LabelText>
        <Icon className={!collapsed ? 'closed' : ''} name="downArrow" size={14} />
      </LabelButton>

      {!collapsed &&
        formattedChildren &&
        formattedChildren.map(([child, id], index) => {
          if (withoutWrappers) {
            return child;
          }

          if (index < DEFAULT_VIEW_ITEMS || extend) {
            return (
              <FilterBox key={id}>
                <FilterItemWrapper>
                  <FilterItem>{child}</FilterItem>
                </FilterItemWrapper>
              </FilterBox>
            );
          }

          return null;
        })}

      {!extend && Children.count(children) > DEFAULT_VIEW_ITEMS && (
        <ExtendButton role="button" onClick={handleExtend}>
          <LabelText>Показать все</LabelText>
        </ExtendButton>
      )}
    </Container>
  );
};

export default Filter;
