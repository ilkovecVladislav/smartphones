import { FC, useEffect, useState, useCallback } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { CSSTransition } from 'react-transition-group';

import Icon from 'components/Icon';
import PaginationComponent from 'components/Pagination';
import { getPhones, Phone } from 'services/smartphones';
import Filters from './Filters';
import ListViewCard from './ListViewCard';
import GridViewCard from './GridViewCard';
import {
  Container,
  Content,
  ResetButton,
  ListContainer,
  PaginationContainer,
  ParamsContainer,
  PriceSortingButton,
  ScrollButton,
  SortingButton,
  SortingContainer,
  SortingLabel,
  SpinnerContainer,
  Title,
  ViewButton,
  ViewButtonsContainer,
} from './styled/SmartPhonesPage.styled';
import {
  useUpdateUrlString,
  useUpdateSearchParamsAfterReload,
  AllFilters,
} from './useSaveFiltersHooks';

type FormValues = {
  price: {
    min: number;
    max: number;
  };
  promotion: string[];
  color: string[];
  ram: string[];
};

const MIN_PRICE = 3500;
const MAX_PRICE = 160000;
const SCROLL_OFFSET = 1990;

const SmartPhonesPage: FC = () => {
  const [data, setData] = useState<Phone[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showToTopButton, setShowToTopButton] = useState(false);
  const [totalItems, setTotalItems] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [isListView, setIsListView] = useState(true);
  const [isPopularitySort, setIsPopularitySort] = useState(true);
  const [isAscendingSort, setIsAscendingSort] = useState(true);

  const methods = useForm<FormValues>({
    defaultValues: {
      price: {
        min: MIN_PRICE,
        max: MAX_PRICE,
      },
      promotion: [],
      color: [],
      ram: [],
    },
  });

  const { watch, setValue } = methods;

  const { color, promotion, price, ram } = watch();

  useUpdateUrlString({
    page: currentPage,
    color,
    promotion,
    price,
    ram,
    popularitySort: isPopularitySort,
    ascendingSort: isAscendingSort,
  });

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= SCROLL_OFFSET && !showToTopButton) {
        setShowToTopButton(true);
      }

      if (window.scrollY < SCROLL_OFFSET && showToTopButton) {
        setShowToTopButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [showToTopButton]);

  useEffect(() => {
    setCurrentPage(1);
  }, [color, promotion, price, ram, isPopularitySort, isAscendingSort]);

  useEffect(() => {
    let isActive = true;
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsLoading(true);
    getPhones({
      page: currentPage,
      color,
      promotion,
      price,
      ram,
      popularitySort: isPopularitySort,
      ascendingSort: isAscendingSort,
    }).then(({ data: list, total }) => {
      if (isActive) {
        setData(list);
        setTotalItems(total);
        setIsLoading(false);
      }
    });

    return () => {
      isActive = false;
    };
  }, [currentPage, color, promotion, price, ram, isPopularitySort, isAscendingSort]);

  const handleSetFiltersFromUrlParams = useCallback(
    (params: AllFilters) => {
      const {
        page,
        ascendingSort,
        popularitySort,
        maxPrice,
        minPrice,
        color: colorFilter,
        promotion: promotionFilter,
        ram: ramFilter,
      } = params;

      if (page) {
        const formattedPage = Number(page);
        if (!Number.isNaN(formattedPage)) {
          setCurrentPage(formattedPage);
        }
      }
      if (maxPrice) {
        const formattedPrice = Number(maxPrice);
        if (!Number.isNaN(formattedPrice) && formattedPrice >= 0) {
          setValue('price.max', formattedPrice);
        }
      }
      if (minPrice) {
        const formattedPrice = Number(minPrice);
        if (!Number.isNaN(formattedPrice) && formattedPrice >= 0) {
          setValue('price.min', formattedPrice);
        }
      }
      if (ascendingSort) {
        setIsAscendingSort(Boolean(ascendingSort));
      }
      if (popularitySort) {
        setIsPopularitySort(Boolean(popularitySort));
      }
      if (colorFilter.length > 0) {
        setValue('color', colorFilter);
      }
      if (promotionFilter.length > 0) {
        setValue('promotion', promotionFilter);
      }
      if (ramFilter.length > 0) {
        setValue('ram', ramFilter);
      }
    },
    [setValue],
  );

  useUpdateSearchParamsAfterReload(handleSetFiltersFromUrlParams);

  const handleListView = () => {
    setIsListView(true);
  };

  const handleGridView = () => {
    setIsListView(false);
  };
  const handlePopularitySort = () => {
    setIsPopularitySort(true);
  };

  const handlePriceSort = () => {
    setIsPopularitySort(false);
    setIsAscendingSort((prevState) => !prevState);
  };

  const handleResetFilters = () => {
    methods.reset();
  };

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <Container>
      <FormProvider {...methods}>
        <Filters />
      </FormProvider>

      <CSSTransition in={methods.formState.isDirty} timeout={300} classNames="reset" unmountOnExit>
        <ResetButton type="button" onClick={handleResetFilters}>
          <Icon name="cross" className="icon" />
          <span className="text">Очистить</span>
        </ResetButton>
      </CSSTransition>

      <CSSTransition in={showToTopButton} timeout={300} classNames="scroll-to-top" unmountOnExit>
        <ScrollButton type="button" onClick={handleScrollToTop}>
          <Icon name="arrowInCircle" size={50} />
        </ScrollButton>
      </CSSTransition>

      <Content>
        <Title>Смартфоны</Title>
        <ParamsContainer>
          <ViewButtonsContainer>
            <ViewButton
              type="button"
              className={isListView ? 'active' : ''}
              onClick={handleListView}
            >
              <Icon name="list" color="#282828" />
            </ViewButton>
            <ViewButton
              type="button"
              className={!isListView ? 'active' : ''}
              onClick={handleGridView}
            >
              <Icon name="grid" />
            </ViewButton>
          </ViewButtonsContainer>
          <SortingContainer>
            <SortingLabel>Сортировать по</SortingLabel>
            <SortingButton
              type="button"
              className={isPopularitySort ? 'active' : ''}
              onClick={handlePopularitySort}
            >
              Популярности
            </SortingButton>
            <PriceSortingButton
              type="button"
              className={!isPopularitySort ? 'active' : ''}
              onClick={handlePriceSort}
            >
              <Icon name={isAscendingSort ? 'ascFilter' : 'descFilter'} size={16} color="#282828" />
              Цене
            </PriceSortingButton>
          </SortingContainer>
        </ParamsContainer>

        {isLoading ? (
          <SpinnerContainer>
            <Icon name="spinner" size={60} />
          </SpinnerContainer>
        ) : (
          <>
            {isListView ? (
              data.map((item) => <ListViewCard key={item.id} data={item} />)
            ) : (
              <ListContainer>
                {data.map((item) => (
                  <GridViewCard key={item.id} data={item} />
                ))}
              </ListContainer>
            )}

            <PaginationContainer>
              <PaginationComponent
                totalItems={totalItems}
                currentPage={currentPage}
                onChangePage={setCurrentPage}
              />
            </PaginationContainer>
          </>
        )}
      </Content>
    </Container>
  );
};

export default SmartPhonesPage;
