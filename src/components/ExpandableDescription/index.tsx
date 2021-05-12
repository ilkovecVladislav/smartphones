import { FC, useState } from 'react';
import size from 'lodash/size';
import truncate from 'lodash/truncate';

import { Container, Text, LearnMoreLink } from './ExpandableDescription.styled';

const DEFAULT_TEXT_OMISSION = '...';
const DEFAULT_TEXT_SEPARATOR = ' ';

type Props = {
  text: string;
  maxLength: number;
  showButtonText: string;
  hideButtonText: string;
  textOmission?: string;
  textSeparator?: string;
};

const ExpandableDescription: FC<Props> = ({
  text,
  maxLength,
  showButtonText,
  hideButtonText,
  textOmission = DEFAULT_TEXT_OMISSION,
  textSeparator = DEFAULT_TEXT_SEPARATOR,
}) => {
  const [isAllTextVisible, setAllTextVisible] = useState(false);

  const handleShowAllText = () => setAllTextVisible(true);
  const handleHideAllText = () => setAllTextVisible(false);

  return (
    <Container>
      <Text>
        {isAllTextVisible
          ? text
          : truncate(text, {
              length: maxLength,
              omission: textOmission,
              separator: textSeparator,
            })}
      </Text>
      {size(text) > maxLength && (
        <LearnMoreLink onClick={isAllTextVisible ? handleHideAllText : handleShowAllText}>
          <span>{isAllTextVisible ? hideButtonText : showButtonText}</span>
        </LearnMoreLink>
      )}
    </Container>
  );
};

export default ExpandableDescription;
