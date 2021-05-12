import styled from '@emotion/styled';

import checkedImage from 'assets/images/checked.png';

export const Container = styled.div`
  display: flex;
  flex: 1 1 100%;
`;

export const Content = styled.div`
  padding: 24px 32px 24px 20px;
  border: 2px solid transparent;
  width: 100%;
  transition: border-color 0.3s;
  box-shadow: 0 1px 0 0 ${({ theme }) => theme.colors.gray[300]};
  margin-bottom: 1px;

  &:hover {
    border-color: ${({ theme }) => theme.colors.orange[400]};
  }
`;

export const Box = styled.div`
  display: flex;
  flex-wrap: nowrap;
`;

export const Section = styled.div<{ width?: string }>`
  padding-left: 10px;
  padding-right: 10px;
  flex-grow: 0;
  flex-shrink: 0;
  flex-basis: ${({ width }) => width || '100%'};
`;

export const Description = styled(Section)`
  flex-grow: 1;
  flex-shrink: 1;
`;

export const Picture = styled.picture`
  width: 100%;
  height: 100%;
`;

export const Img = styled.img`
  width: 100%;
  height: auto;
`;

export const TitleContainer = styled.div`
  font-size: 21px;
  line-height: 1.4;
  margin-bottom: 10px;
`;

export const Title = styled.p`
  color: ${({ theme }) => theme.colors.black[400]};
  transition: color 0.3s ease-out;
  text-decoration: none;
  cursor: pointer;
  font-family: 'OfficinaSerifBook', sans-serif;

  &:hover {
    color: ${({ theme }) => theme.colors.orange[400]};
  }
`;

export const CompareSection = styled.div`
  margin-bottom: 12px;
  display: flex;
  align-items: flex-start;
  cursor: pointer;
  transition: color 0.3s ease-out;
  color: ${({ theme }) => theme.colors.gray[400]};

  &:hover {
    color: ${({ theme }) => theme.colors.orange[400]};
  }
`;

export const CompareText = styled.span`
  border-bottom: 1px dashed currentColor;
  margin-left: 10px;
  font-size: 13px;
`;

export const Row = styled.div`
  display: flex;
  padding: 4px 0;
`;

export const LeftCell = styled.span`
  flex: 0 1 110px;
  color: ${({ theme }) => theme.colors.gray[400]};
  padding-right: 10px;
`;

export const RightCell = styled.span`
  flex: 1 1 35%;
  color: ${({ theme }) => theme.colors.black[400]};
  font-size: 15px;
  font-family: 'OfficinaSerifBook', sans-serif;
`;

export const PriceContainer = styled.div`
  margin-bottom: 20px;
`;

export const OldPrice = styled.div`
  display: inline-block;
  position: relative;
  color: ${({ theme }) => theme.colors.gray[400]};
  font-size: 17px;
  line-height: 1.4117;
  font-family: 'OfficinaSerifBook', sans-serif;

  &:before {
    content: '';
    display: block;
    background: ${({ theme }) => theme.colors.red[600]};
    height: 2px;
    transform: rotate(-12deg);
    width: 100%;
    position: absolute;
    left: 0;
    top: 45%;
    z-index: 1;
  }
`;

export const CurrentPriceContainer = styled.div`
  font-size: 30px;
  line-height: 1.3;
  display: flex;
  align-items: center;
`;

export const InnerCurrentPrice = styled.div`
  display: block;
  margin-top: -11px;
  margin-right: 10px;
  padding-top: 1px;
`;

export const CurrentPrice = styled.span`
  display: inline-block;
  vertical-align: middle;
  margin-top: 10px;
  font-family: 'OfficinaSerifBook', sans-serif;
`;

export const Discount = styled.span`
  font-size: 14px;
  line-height: 18px;
  color: ${({ theme }) => theme.colors.white[400]};
  background-color: ${({ theme }) => theme.colors.orange[900]};
  border-radius: 10px;
  padding: 5px 8px;
  font-family: Roboto, sans-serif;
  display: inline-block;
`;

export const BuyContainer = styled.div`
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;

export const BuyButton = styled.button`
  margin-bottom: 10px;
  min-width: 139px;
  margin-right: 20px;
  padding: 0 20px;
  height: 37px;
  cursor: pointer;
  white-space: nowrap;
  color: ${({ theme }) => theme.colors.black[400]};
  border: none;
  border-radius: 19px;
  box-shadow: 0 3px 0 0 #ebb16f, 0 4px 0 0 #d99a59, 0 4px 8px 0 rgb(102 55 0 / 40%);
  transition: box-shadow 0.1s, transform 0.1s;
  background: linear-gradient(#f6c164, #f6c164 60%, #fdcf70);
  font-family: 'OfficinaSerifBook', sans-serif;

  &:hover {
    background: #fad485;
  }

  &:active {
    transform: translateY(2px);
    box-shadow: 0 1px 0 0 #ebb16f, 0 2px 0 0 #d99a59, 0 2px 4px 0 rgb(102 55 0 / 40%);
  }
`;

export const SucceedButton = styled.button`
  min-width: 139px;
  background: ${({ theme }) => theme.colors.green[400]};
  border-radius: 4px;
  border: none;
  margin-right: 20px;
  padding: 7px 14px;
  color: ${({ theme }) => theme.colors.white[400]};
  min-height: 41px;
  font-size: 17px;
  font-size: 15px;
  box-shadow: none;
  text-shadow: none;
  text-decoration: underline;
  cursor: pointer;
  font-family: 'OfficinaSerifBook', sans-serif;

  &:hover {
    text-decoration: none;
  }
`;

export const SucceedButtonContent = styled.span`
  margin-bottom: 10px;
  &:before {
    content: '';
    width: 17px;
    height: 14px;
    vertical-align: middle;
    margin-right: 10px;
    background: ${({ theme }) => theme.colors.green[400]} url(${checkedImage}) 0 0 no-repeat;
    display: inline-block;
    position: relative;
  }
`;

export const BuyLabel = styled.span`
  margin-bottom: 10px;
  font-size: 16.5px;
  letter-spacing: 0.3px;
  transition: color 0.3s, border-color 0.3s;
  cursor: pointer;
  border-bottom: 1px dashed rgba(40, 40, 40, 0.33);

  &:hover {
    color: ${({ theme }) => theme.colors.orange[400]};
    border-color: ${({ theme }) => theme.colors.orange[400]};
  }
`;

export const DeliveryContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 10px;
`;

export const DeliveryBox = styled.div`
  transition: color 0.3s;
  cursor: pointer;
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.colors.gray[400]};

  &:first-of-type {
    margin-right: 20px;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.gray[400]};
  }
`;

export const PickUpText = styled.span`
  margin-left: 8px;
`;

export const Badge = styled.div<{ bgColor: string }>`
  display: inline-block;
  vertical-align: top;
  position: relative;
  margin: 0 10px 10px;
  padding: 4px 10px 5px;
  border-radius: 10px;
  background-color: ${({ bgColor }) => bgColor};
  min-height: 28px;

  & .icon {
    width: 12px;
    height: 12px;
    position: absolute;
    left: -10px;
    top: 50%;
    margin-top: -4px;
  }
`;

export const BadgeText = styled.span`
  font-family: 'OfficinaSerifBook', sans-serif;
  font-size: 15.5px;
  letter-spacing: 0.4px;
  color: ${({ theme }) => theme.colors.white[400]};
  white-space: nowrap;
`;

export const PromotionContainer = styled.div`
  padding: 20px;
  box-shadow: 0 2px 6px 0 rgb(0 0 0 / 18%);
  transition: color 0.3s;
  cursor: pointer;
  display: flex;
  align-items: center;

  & .icon {
    margin-right: 5px;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.orange[400]};
  }
`;

export const PromotionText = styled.span`
  font-family: Roboto, sans-serif;
  font-size: 14px;
  line-height: 1.4;
`;

export const RatingContainer = styled.div`
  margin-bottom: 12px;
  color: ${({ theme }) => theme.colors.orange[400]};
  cursor: pointer;
  display: flex;
  align-items: center;

  .star + .star {
    margin-left: 3px;
  }
`;

export const FeedBack = styled.span`
  margin-left: 10px;
  color: ${({ theme }) => theme.colors.gray[400]};
  border-bottom: 1px dashed currentColor;
  transition: color 0.2s ease-out;
  font-size: 13px;

  &:hover {
    color: ${({ theme }) => theme.colors.orange[400]};
    border-color: ${({ theme }) => theme.colors.orange[400]};
  }
`;
