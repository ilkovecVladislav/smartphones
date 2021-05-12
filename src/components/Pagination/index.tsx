import { FC, Fragment, useMemo } from 'react';

import Icon from 'components/Icon';
import { Container, Item, PageNumber, EmptyItem, NavigationButton } from './Pagination.styled';

const ITEMS_PER_PAGE = 24;

const getRenderPages = (currentPage: number, pages: number[]): number[] => {
  if (pages.length <= 5) {
    return pages;
  }

  if (currentPage === 1 || currentPage === 2) {
    return [...pages.slice(0, 3), pages[pages.length - 1]];
  }

  if (currentPage > 2 && currentPage < 5) {
    return [...pages.slice(0, currentPage + 1), pages[pages.length - 1]];
  }

  if (currentPage === pages[pages.length - 1] || currentPage === pages[pages.length - 2]) {
    return [pages[0], ...pages.slice(pages[pages.length - 4])];
  }

  return [pages[0], ...pages.slice(currentPage - 2, currentPage + 1), pages[pages.length - 1]];
};

type ItemProps = {
  value: number;
  isActive: boolean;
  onClick: (value: number) => void;
};

const PageItem: FC<ItemProps> = ({ value, isActive, onClick }) => {
  const handleClick = () => {
    onClick(value);
  };

  return (
    <Item className={isActive ? 'active' : ''} onClick={handleClick}>
      <PageNumber>{value}</PageNumber>
    </Item>
  );
};

type Props = {
  totalItems: number;
  currentPage: number;
  onChangePage: (value: number) => void;
};

const PaginationComponent: FC<Props> = ({ totalItems, currentPage, onChangePage }) => {
  const pages = useMemo(() => {
    const result = [];

    for (let i = 1; i <= Math.ceil(totalItems / ITEMS_PER_PAGE); i += 1) {
      result.push(i);
    }

    return result;
  }, [totalItems]);

  const renderPageNumbers = getRenderPages(currentPage, pages);

  const handleNextClick = () => {
    if (currentPage < pages[pages.length - 1]) {
      onChangePage(currentPage + 1);
    }
  };

  const handlePrevClick = () => {
    if (currentPage > 1) {
      onChangePage(currentPage - 1);
    }
  };

  const handlePageClick = (newPageNumber: number) => {
    onChangePage(newPageNumber);
  };

  if (totalItems < ITEMS_PER_PAGE) {
    return null;
  }

  return (
    <Container>
      <li>
        <NavigationButton
          type="button"
          onClick={handlePrevClick}
          disabled={currentPage === pages[0]}
        >
          <Icon className="previous" name="downArrow" />
        </NavigationButton>
      </li>
      {renderPageNumbers.map((item, index, arr) => {
        if (arr[index + 1] !== item + 1 && arr[index + 1] !== undefined) {
          return (
            <Fragment key={item}>
              <PageItem value={item} isActive={item === currentPage} onClick={handlePageClick} />
              <EmptyItem>...</EmptyItem>
            </Fragment>
          );
        }

        return (
          <PageItem
            key={item}
            value={item}
            isActive={item === currentPage}
            onClick={handlePageClick}
          />
        );
      })}
      <li>
        <NavigationButton
          type="button"
          onClick={handleNextClick}
          disabled={currentPage === pages[pages.length - 1]}
        >
          <Icon className="next" name="downArrow" />
        </NavigationButton>
      </li>
    </Container>
  );
};

export default PaginationComponent;
