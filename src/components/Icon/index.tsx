import { FC } from 'react';

import IconContainer from './Icon.styled';
import { ReactComponent as Checked } from './svg/checked.svg';
import { ReactComponent as Compare } from './svg/compare.svg';
import { ReactComponent as FilledStar } from './svg/filledStar.svg';
import { ReactComponent as Star } from './svg/star.svg';
import { ReactComponent as DownArrow } from './svg/downArrow.svg';
import { ReactComponent as Filter } from './svg/filter.svg';
import { ReactComponent as List } from './svg/list.svg';
import { ReactComponent as Grid } from './svg/grid.svg';
import { ReactComponent as AscFilter } from './svg/ascFilter.svg';
import { ReactComponent as DescFilter } from './svg/descFilter.svg';
import { ReactComponent as Geolocation } from './svg/geolocation.svg';
import { ReactComponent as DeliveryTruck } from './svg/deliveryTruck.svg';
import { ReactComponent as Badge } from './svg/badge.svg';
import { ReactComponent as Gift } from './svg/gift.svg';
import { ReactComponent as Spinner } from './svg/spinner.svg';
import { ReactComponent as Cross } from './svg/cross.svg';
import { ReactComponent as ArrowInCircle } from './svg/arrowInCircle.svg';
import { ReactComponent as Like } from './svg/like.svg';
import { ReactComponent as Dislike } from './svg/dislike.svg';

interface Icons {
  checked: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  compare: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  filledStar: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  star: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  downArrow: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  filter: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  list: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  grid: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  ascFilter: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  descFilter: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  geolocation: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  deliveryTruck: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  badge: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  gift: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  spinner: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  cross: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  arrowInCircle: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  like: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  dislike: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

export const nameToComponentMap: Icons = {
  checked: Checked,
  compare: Compare,
  filledStar: FilledStar,
  star: Star,
  downArrow: DownArrow,
  filter: Filter,
  list: List,
  grid: Grid,
  ascFilter: AscFilter,
  descFilter: DescFilter,
  geolocation: Geolocation,
  deliveryTruck: DeliveryTruck,
  badge: Badge,
  gift: Gift,
  spinner: Spinner,
  cross: Cross,
  arrowInCircle: ArrowInCircle,
  like: Like,
  dislike: Dislike,
};

export type IconName = keyof Icons;

type Props = {
  name: IconName;
  size?: number;
  color?: string;
  className?: string;
  onClick?: (event: React.MouseEvent) => void;
};

const Icon: FC<Props> = ({ name, size = 14, color, className, ...rest }) => {
  const Component = nameToComponentMap[name];

  return (
    <IconContainer className={className} color={color} size={size} {...rest}>
      <Component />
    </IconContainer>
  );
};

export default Icon;

// import { Story } from '@storybook/react';
// import styled from '@emotion/styled';

// import Icon, { nameToComponentMap as iconNames, IconName } from '.';

// const Container = styled.div`
//   display: flex;
//   flex-wrap: wrap;
// `;

// const IconContainer = styled.div`
//   width: 60px;
//   height: 60px;
//   border: 2px solid lightcyan;
//   margin: 5px;
//   display: flex;
//   align-items: center;
//   justify-content: center;
// `;

// export default {
//   title: 'components/Icon',
//   component: Icon,
//   argTypes: {
//     color: {
//       description: 'Icon color',
//       control: 'color',
//     },
//     size: {
//       description: 'Icon size',
//       control: 'number',
//       defaultValue: 30,
//     },
//   },
// };

// type Props = {
//   color?: string;
//   size?: number;
// };

// export const Base: Story<Props> = (args) => (
//   <Container>
//     {Object.keys(iconNames).map((icon) => {
//       const name = icon as IconName;

//       return (
//         <IconContainer key={icon}>
//           <Icon {...args} name={name} />
//         </IconContainer>
//       );
//     })}
//   </Container>
// );
