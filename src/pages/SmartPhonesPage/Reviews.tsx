import { FC, useState, useMemo } from 'react';
import times from 'lodash/times';
import random from 'lodash/random';
import { uniqueNamesGenerator, Config, names } from 'unique-names-generator';
import { loremIpsum } from 'lorem-ipsum';

import Icon from 'components/Icon';
import ExpandableDescription from 'components/ExpandableDescription';
import { RatingContainer } from './styled/ListViewCard.styled';
import {
  Container,
  FeedBack,
  DateLabel,
  FeedBackLabel,
  LeftPart,
  Mark,
  Name,
  RightPart,
} from './styled/Reviews.styled';

const config: Config = {
  dictionaries: [names],
};

const Review: FC = () => {
  const [isLiked, setIsLiked] = useState(false);
  const [isDisliked, setIsDisliked] = useState(false);
  const initialLikes = useMemo(() => random(1, 143), []);
  const initialDislikes = useMemo(() => random(0, 42), []);

  const [likes, setLikes] = useState(initialLikes);
  const [dislikes, setDislikes] = useState(initialDislikes);

  const handleLike = () => {
    if (!isDisliked && !isLiked) {
      setIsLiked(true);
      setLikes((prevState) => prevState + 1);
    }
    if (!isDisliked && isLiked) {
      setIsLiked(false);
      setLikes((prevState) => prevState - 1);
    }
    if (isDisliked && !isLiked) {
      setIsLiked(true);
      setLikes((prevState) => prevState + 1);
      setIsDisliked(false);
      setDislikes((prevState) => prevState - 1);
    }
  };

  const handleDislike = () => {
    if (!isDisliked && !isLiked) {
      setIsDisliked(true);
      setDislikes((prevState) => prevState + 1);
    }
    if (isDisliked && !isLiked) {
      setIsDisliked(false);
      setDislikes((prevState) => prevState - 1);
    }
    if (!isDisliked && isLiked) {
      setIsDisliked(true);
      setDislikes((prevState) => prevState + 1);
      setIsLiked(false);
      setLikes((prevState) => prevState - 1);
    }
  };

  const name = useMemo(() => uniqueNamesGenerator(config), []);
  const rate = useMemo(() => random(1, 5), []);
  const date = useMemo(() => {
    const randomYear = random(2016, 2020);
    const randomMonth = random(0, 11);
    const randomDay = random(0, 28);
    const temp = new Date(randomYear, randomMonth, randomDay);

    return temp.toLocaleDateString('ru-RU', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  }, []);

  const text = useMemo(
    () =>
      loremIpsum({
        count: 1,
        format: 'plain',
        paragraphLowerBound: 2,
        paragraphUpperBound: 5,
        random: Math.random,
        sentenceLowerBound: 5,
        sentenceUpperBound: 15,
        suffix: '\n',
        units: 'paragraphs',
      }),
    [],
  );

  return (
    <Container>
      <LeftPart>
        <Name>{name}</Name>
        <DateLabel>{date}</DateLabel>
        <RatingContainer>
          {times(rate, (idx) => (
            <Icon key={idx} className="star" name="filledStar" size={18} />
          ))}
          {times(5 - rate, (idx) => (
            <Icon key={idx} className="star" name="star" size={18} />
          ))}
        </RatingContainer>
      </LeftPart>
      <RightPart>
        <ExpandableDescription
          text={text}
          maxLength={200}
          showButtonText="Показать полный текст отзыва"
          hideButtonText="Скрыть текст"
        />
        <FeedBack>
          <FeedBackLabel>Оцените отзыв:</FeedBackLabel>
          <Mark>
            <Icon
              className={isLiked ? 'icon like active' : 'icon like'}
              name="like"
              size={16}
              onClick={handleLike}
            />
            <span className="amount">{likes}</span>
          </Mark>
          <Mark>
            <Icon
              className={isDisliked ? 'icon dislike active' : 'icon dislike'}
              name="dislike"
              size={16}
              onClick={handleDislike}
            />
            <span className="amount">{dislikes}</span>
          </Mark>
        </FeedBack>
      </RightPart>
    </Container>
  );
};

type Props = {
  amount: number;
};

const Reviews: FC<Props> = ({ amount }) => (
  <div>
    {times(amount, (idx) => (
      <Review key={idx} />
    ))}
  </div>
);

export default Reviews;
