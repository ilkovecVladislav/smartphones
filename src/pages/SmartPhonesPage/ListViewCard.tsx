import { FC, useState, useEffect } from 'react';
import times from 'lodash/times';

import phoneImage from 'assets/images/phone.png';
import Icon from 'components/Icon';
import { Phone } from 'services/smartphones';
import {
  Title,
  Content,
  Container,
  PickUpText,
  DeliveryBox,
  DeliveryContainer,
  BuyLabel,
  SucceedButton,
  SucceedButtonContent,
  BuyButton,
  BuyContainer,
  CurrentPrice,
  InnerCurrentPrice,
  CurrentPriceContainer,
  OldPrice,
  PriceContainer,
  Badge,
  BadgeText,
  Box,
  FeedBack,
  RatingContainer,
  CompareSection,
  CompareText,
  Description,
  Discount,
  Img,
  LeftCell,
  Picture,
  PromotionContainer,
  PromotionText,
  RightCell,
  Row,
  Section,
  TitleContainer,
} from './styled/ListViewCard.styled';

type Props = {
  data: Phone;
  onReviewsClick: (value: number) => void;
};

const SmartPhoneItem: FC<Props> = ({ data, onReviewsClick }) => {
  const { id, name, price, isFastDelivery, badges, parameters, promotion, rate, reviews } = data;
  const parametersValues = Object.values(parameters);
  const [isAddedToCompare, setIsAddedToCompare] = useState(false);
  const [isAddedToBasket, setIsAddedToBasket] = useState(false);

  useEffect(() => {
    const currentComparePhones = localStorage.getItem('compare');
    const selectedPhones = localStorage.getItem('basket');

    if (currentComparePhones && currentComparePhones.includes(id)) {
      setIsAddedToCompare(true);
    }

    if (selectedPhones && selectedPhones.includes(id)) {
      setIsAddedToBasket(true);
    }
  }, [id]);

  const handleAddToCompareClick = () => {
    if (!isAddedToCompare) {
      setIsAddedToCompare(true);
      const currentComparePhones = localStorage.getItem('compare');

      if (currentComparePhones) {
        const result = [];
        result.push(...JSON.parse(currentComparePhones));
        result.push(data.id);
        localStorage.setItem('compare', JSON.stringify(result));
      } else {
        localStorage.setItem('compare', JSON.stringify([data.id]));
      }
    }
  };

  const handleAddToBasket = () => {
    if (!isAddedToBasket) {
      setIsAddedToBasket(true);
      const selectedPhones = localStorage.getItem('basket');

      if (selectedPhones) {
        const result = [];
        result.push(...JSON.parse(selectedPhones));
        result.push(id);
        localStorage.setItem('basket', JSON.stringify(result));
      } else {
        localStorage.setItem('basket', JSON.stringify([id]));
      }
    }
  };

  const handleReviewsClick = () => {
    if (reviews) {
      onReviewsClick(reviews);
    }
  };

  return (
    <Container>
      <Content>
        {badges && (
          <Badge className="badge" bgColor={badges.bgColor}>
            <Icon name="badge" className="icon" color={badges.bgColor} />
            <BadgeText>{badges.displayText}</BadgeText>
          </Badge>
        )}
        <Box>
          <Section width="22%">
            <Picture>
              <Img src={phoneImage} loading="lazy" alt={name} />
            </Picture>
          </Section>

          <Description>
            <TitleContainer>
              <Title>{name}</Title>
            </TitleContainer>
            {rate > 0 && (
              <RatingContainer>
                {times(rate, (idx) => (
                  <Icon key={idx} className="star" name="filledStar" size={18} />
                ))}
                {times(5 - rate, (idx) => (
                  <Icon key={idx} className="star" name="star" size={18} />
                ))}

                <FeedBack onClick={handleReviewsClick}>{reviews} отзывов</FeedBack>
              </RatingContainer>
            )}
            <CompareSection>
              <Icon name="compare" size={26} />
              <CompareText onClick={handleAddToCompareClick}>
                {isAddedToCompare ? 'Перейти к сравнению' : 'Добавить в сравнение'}
              </CompareText>
            </CompareSection>
            <div>
              {parametersValues.map((item) => (
                <Row key={item.slug}>
                  <LeftCell>{item.label}</LeftCell>
                  <RightCell>{item.displayValue}</RightCell>
                </Row>
              ))}
            </div>
          </Description>

          <Section width="35%">
            <PriceContainer>
              {price.oldPrice && <OldPrice>{price.oldPrice.toLocaleString('ru-RU')} ₽</OldPrice>}
              <CurrentPriceContainer>
                <InnerCurrentPrice>
                  <CurrentPrice>{price.price.toLocaleString('ru-RU')} ₽</CurrentPrice>
                </InnerCurrentPrice>
                {price.discountFormatted && <Discount>{price.discountFormatted} ₽</Discount>}
              </CurrentPriceContainer>
            </PriceContainer>
            <BuyContainer>
              {isAddedToBasket ? (
                <SucceedButton type="button">
                  <SucceedButtonContent>В корзине</SucceedButtonContent>
                </SucceedButton>
              ) : (
                <BuyButton type="button" onClick={handleAddToBasket}>
                  Купить
                </BuyButton>
              )}
              <BuyLabel>Быстрый заказ</BuyLabel>
            </BuyContainer>
            <DeliveryContainer>
              <DeliveryBox>
                <Icon name="geolocation" size={20} />
                <PickUpText>Самовывоз</PickUpText>
              </DeliveryBox>
              {isFastDelivery && (
                <DeliveryBox>
                  <Icon name="deliveryTruck" size={25} />
                  <PickUpText>Доставка за 2 часа</PickUpText>
                </DeliveryBox>
              )}
            </DeliveryContainer>
            {promotion && (
              <PromotionContainer>
                <Icon className="icon" name="gift" size={30} />
                <PromotionText>{promotion.name}</PromotionText>
              </PromotionContainer>
            )}
          </Section>
        </Box>
      </Content>
    </Container>
  );
};

export default SmartPhoneItem;
