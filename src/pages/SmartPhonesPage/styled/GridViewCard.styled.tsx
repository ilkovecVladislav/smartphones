import styled from '@emotion/styled';

import checkedImage from 'assets/images/checked.png';

export const Container = styled.div`
  display: flex;
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 100%;
`;

export const Content = styled.div`
  padding: 24px 32px 24px 20px;
  border: 2px solid transparent;
  width: 100%;
  height: 100%;
  box-shadow: 0 0 0 1px ${({ theme }) => theme.colors.gray[200]};
  transition: border-color 0.3s;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &:hover {
    border-color: ${({ theme }) => theme.colors.orange[400]};
  }
`;

export const ProductHeader = styled.div`
  padding-bottom: 20px;
`;

export const Title = styled.p`
  font-family: Roboto, sans-serif;
  font-size: 16px;
  line-height: 1.5;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.colors.black[400]};
  cursor: pointer;
  transition: color 0.3s;

  &:hover {
    color: ${({ theme }) => theme.colors.orange[400]};
  }
`;

export const Badge = styled.div<{ bgColor: string }>`
  display: inline-block;
  vertical-align: top;
  position: relative;
  min-height: 18px;
  padding: 1px 5px;
  border-radius: 6px;
  background-color: ${({ bgColor }) => bgColor};
  margin: 0 5px 10px;

  & .icon {
    position: absolute;
    width: 6px;
    height: 6px;
    left: -5px;
    margin-top: -2px;
    top: 50%;
  }
`;

export const BadgeText = styled.span`
  font-family: 'OfficinaSerifBook', sans-serif;
  font-size: 15.5px;
  letter-spacing: 0.4px;
  color: ${({ theme }) => theme.colors.white[400]};
  white-space: nowrap;
`;

export const Discount = styled.span`
  color: ${({ theme }) => theme.colors.white[400]};
  background-color: ${({ theme }) => theme.colors.orange[900]};
  font-family: 'OfficinaSerifBook', sans-serif;
  font-size: 15.5px;
  letter-spacing: 0.4px;
  white-space: nowrap;
  min-height: 18px;
  padding: 1px 5px;
  border-radius: 6px;
  display: inline-block;
  margin: 0 5px 10px 0;
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
  font-size: 11px;

  &:hover {
    color: ${({ theme }) => theme.colors.orange[400]};
    border-color: ${({ theme }) => theme.colors.orange[400]};
  }
`;

export const ProductBottom = styled.div`
  flex: 0 1 auto;
`;

export const ImageContainer = styled.picture`
  margin-bottom: 12px;
  display: block;
  cursor: pointer;
`;

export const Image = styled.img`
  margin: 0 auto;
`;

export const PriceContainer = styled.div`
  margin-bottom: 20px;
  text-align: center;
`;

export const OldPrice = styled.div`
  display: inline-block;
  position: relative;
  color: ${({ theme }) => theme.colors.gray[400]};
  font-size: 17px;
  line-height: 1.4117;
  height: 23px;

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
  justify-content: center;
`;

export const InnerCurrentPrice = styled.div`
  display: block;
  margin-top: -11px;
  padding-top: 1px;
`;

export const CurrentPrice = styled.span`
  display: inline-block;
  vertical-align: middle;
  margin-top: 10px;
`;

export const BuyContainer = styled.div`
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const BuyButton = styled.button`
  margin-bottom: 10px;
  min-width: 139px;
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
  padding: 7px 14px;
  color: ${({ theme }) => theme.colors.white[400]};
  min-height: 41px;
  font-size: 17px;
  font-size: 15px;
  box-shadow: none;
  text-shadow: none;
  text-decoration: underline;
  cursor: pointer;

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
  font-family: 'OfficinaSerifBook', sans-serif;
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
  justify-content: center;
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
    color: ${({ theme }) => theme.colors.orange[400]};
  }
`;
