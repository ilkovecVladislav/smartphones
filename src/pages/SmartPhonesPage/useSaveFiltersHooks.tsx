import { useEffect, useRef } from 'react';
import { useLocation, useHistory } from 'react-router-dom';

type Props = {
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

const useUpdateUrlString = ({
  page,
  price,
  color,
  promotion,
  ram,
  popularitySort,
  ascendingSort,
}: Props): void => {
  const history = useHistory();
  const { pathname } = useLocation();

  useEffect(() => {
    const search = new URLSearchParams();

    search.set('page', encodeURIComponent(page));
    search.set('minPrice', encodeURIComponent(price.min));
    search.set('maxPrice', encodeURIComponent(price.max));
    search.set('popularitySort', encodeURIComponent(popularitySort));
    search.set('ascendingSort', encodeURIComponent(ascendingSort));

    const filters = {
      color,
      promotion,
      ram,
    };
    const searchParamsArray = Object.entries(filters);

    searchParamsArray.forEach(([key, value]) => {
      if (value.length > 0) {
        value.forEach((item) => {
          search.append(key, encodeURIComponent(item));
        });
      }
    });

    history.replace(`${pathname}?${search.toString()}`);
  }, [page, color, promotion, price, ram, popularitySort, ascendingSort, pathname, history]);
};

type Filters = {
  page?: string;
  minPrice?: string;
  maxPrice?: string;
  popularitySort?: boolean;
  ascendingSort?: boolean;
};

export type AllFilters = {
  color: string[];
  promotion: string[];
  ram: string[];
} & Filters;

const useUpdateSearchParamsAfterReload = (
  setFiltersFromUrlParams: (data: AllFilters) => void,
): void => {
  const { search: urlSearch } = useLocation();
  const cachedUrlSearch = useRef(urlSearch);

  useEffect(() => {
    const search = new URLSearchParams(cachedUrlSearch.current);
    const selectedRam = search.getAll('ram');
    search.delete('ram');
    const selectedColor = search.getAll('color');
    search.delete('color');
    const selectedPromotion = search.getAll('promotion');
    search.delete('promotion');

    const searchParamsArray = Array.from(search.entries());
    const normalizedSearchParams: Filters = searchParamsArray.reduce((acc, [key, value]) => {
      const decodedValue = decodeURIComponent(value);

      return {
        ...acc,
        [key]: decodedValue,
      };
    }, {});

    setFiltersFromUrlParams({
      ...normalizedSearchParams,
      ram: selectedRam,
      color: selectedColor,
      promotion: selectedPromotion,
    });
  }, [setFiltersFromUrlParams]);
};

export { useUpdateUrlString, useUpdateSearchParamsAfterReload };
