import _ from 'lodash';

import generateSmartphonesData from 'data/smartphonesGenerator';

export type Phone = {
  id: string;
  name: string;
  brand: string;
  parameters: {
    [key: string]: {
      label: string;
      value: number | string;
      displayValue: string;
      slug: string;
    };
  };
  color: {
    value: number | string;
    displayValue: string;
    slug: string;
  };
  isFastDelivery: boolean;
  rate: number;
  reviews: number | null;
  price: {
    oldPrice: null | number;
    price: number;
    discount: null | number;
    discountFormatted: null | string;
  };
  promotion: null | {
    name: string;
    slug: string;
  };
  badges: null | {
    displayText: string;
    bgColor: string;
  };
};

const ITEMS_PER_PAGE = 24;

const paginate = (items: Phone[], pageNumber: number): Phone[] => {
  const startIndex = (pageNumber - 1) * ITEMS_PER_PAGE;

  return _(items).slice(startIndex).take(ITEMS_PER_PAGE).value();
};

const data = generateSmartphonesData() as Phone[];

const getFilteredByRam = (array: Phone[], filter: string[]): Phone[] => {
  if (filter.length === 0) {
    return array;
  }

  return array.filter(({ parameters }) => {
    if (parameters.ram) {
      return filter.includes(parameters.ram.slug);
    }

    return false;
  });
};

const getFilteredByPromotion = (array: Phone[], filter: string[]): Phone[] => {
  if (filter.length === 0) {
    return array;
  }

  return array.filter(({ promotion }) => {
    if (promotion) {
      return filter.includes(promotion.slug);
    }

    return false;
  });
};
const getFilteredByColor = (array: Phone[], filter: string[]): Phone[] => {
  if (filter.length === 0) {
    return array;
  }

  return array.filter(({ color }) => {
    if (color) {
      return filter.includes(color.slug);
    }

    return false;
  });
};

const getFilteredByPrice = (array: Phone[], min: number, max: number): Phone[] =>
  array.filter(({ price }) => price.price >= min && price.price <= max);

type Params = {
  page: number;
  color: string[];
  promotion: string[];
  ram: string[];
  price: {
    min: number;
    max: number;
  };
  popularitySort: boolean;
  ascendingSort: boolean;
};

export const getPhones = ({
  page,
  color,
  ram,
  promotion,
  price,
  popularitySort,
  ascendingSort,
}: Params): Promise<{ data: Phone[]; total: number }> =>
  new Promise((resolve) => setTimeout(resolve, 1)).then(() => {
    const filteredByColor = getFilteredByColor(data, color);
    const filteredByRam = getFilteredByRam(filteredByColor, ram);
    const filteredByPromotion = getFilteredByPromotion(filteredByRam, promotion);
    const filteredByPrice = getFilteredByPrice(filteredByPromotion, price.min, price.max);
    let sortedList = filteredByPrice;

    if (popularitySort) {
      sortedList = filteredByPrice.sort((first, second) => second.rate - first.rate);
    } else if (ascendingSort) {
      sortedList = filteredByPrice.sort((first, second) => first.price.price - second.price.price);
    } else {
      sortedList = filteredByPrice.sort((first, second) => second.price.price - first.price.price);
    }

    return { data: paginate(sortedList, page), total: filteredByPrice.length };
  });
