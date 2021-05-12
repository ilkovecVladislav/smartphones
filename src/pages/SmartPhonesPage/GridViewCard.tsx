import { FC, useState, useEffect } from 'react';
import times from 'lodash/times';

import Icon from 'components/Icon';
import phoneImage from 'assets/images/phone.png';
import { Phone } from 'services/smartphones';
import {
  Container,
  Box,
  Content,
  ProductHeader,
  Title,
  Badge,
  BadgeText,
  Discount,
  RatingContainer,
  FeedBack,
  ProductBottom,
  ImageContainer,
  Image,
  PriceContainer,
  CurrentPriceContainer,
  InnerCurrentPrice,
  CurrentPrice,
  OldPrice,
  BuyContainer,
  BuyButton,
  SucceedButtonContent,
  SucceedButton,
  BuyLabel,
  DeliveryContainer,
  DeliveryBox,
} from './styled/GridViewCard.styled';

type Props = {
  data: Phone;
};

const GridViewCard: FC<Props> = ({ data }) => {
  const { id, name, price, isFastDelivery, badges, rate, reviews } = data;
  const [isAddedToBasket, setIsAddedToBasket] = useState(false);

  useEffect(() => {
    const selectedPhones = localStorage.getItem('basket');

    if (selectedPhones && selectedPhones.includes(id)) {
      setIsAddedToBasket(true);
    }
  }, [id]);

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

  return (
    <Container>
      <Box>
        <Content>
          <ProductHeader>
            <Title>{name}</Title>
            <div>
              {badges && (
                <Badge className="badge" bgColor={badges.bgColor}>
                  <Icon name="badge" className="icon" color={badges.bgColor} size={6} />
                  <BadgeText>{badges.displayText}</BadgeText>
                </Badge>
              )}
              {price.discountFormatted && <Discount>{price.discount} ₽</Discount>}
            </div>
            {rate > 0 && (
              <RatingContainer>
                {times(rate, (idx) => (
                  <Icon key={idx} className="star" name="filledStar" size={11} />
                ))}
                {times(5 - rate, (idx) => (
                  <Icon key={idx} className="star" name="star" size={11} />
                ))}

                <FeedBack>{reviews} отзывов</FeedBack>
              </RatingContainer>
            )}
          </ProductHeader>
          <ProductBottom>
            <ImageContainer>
              <Image src={phoneImage} width="90" height="114" alt={name} />
            </ImageContainer>
            <PriceContainer>
              <OldPrice>
                {price.oldPrice ? `${price.oldPrice.toLocaleString('ru-RU')}  ₽` : null}
              </OldPrice>
              <CurrentPriceContainer>
                <InnerCurrentPrice>
                  <CurrentPrice>{price.price.toLocaleString('ru-RU')} ₽</CurrentPrice>
                </InnerCurrentPrice>
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
              </DeliveryBox>
              {isFastDelivery && (
                <DeliveryBox>
                  <Icon name="deliveryTruck" size={25} />
                </DeliveryBox>
              )}
            </DeliveryContainer>
          </ProductBottom>
        </Content>
      </Box>
    </Container>
  );
};

export default GridViewCard;
