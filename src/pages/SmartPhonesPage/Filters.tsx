import { FC, FormEvent, useEffect, useState } from 'react';
import { useFormContext, Controller } from 'react-hook-form';

import Icon from 'components/Icon';
import FilterContainer from 'components/Filter';
import Checkbox from 'components/Checkbox';
import PriceFilter from 'components/PriceFilter';
import { getFilters, Filter } from 'services/filters';
import {
  Container,
  Box,
  FiltersContent,
  FiltersTitle,
  ColorFilterContent,
  ColorCircle,
  PriceFilterWrapper,
} from './styled/Filters.styled';

const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
  event.preventDefault();
};

const Filters: FC = () => {
  const { control } = useFormContext();
  const [filters, setFilters] = useState<Filter[]>([]);

  useEffect(() => {
    getFilters().then((response) => setFilters(response));
  }, []);

  return (
    <Container onSubmit={handleSubmit}>
      <Box>
        <FiltersContent>
          <FiltersTitle>
            <span>Фильтры</span>
            <Icon name="filter" />
          </FiltersTitle>
          <FilterContainer label="Цена" withoutWrappers>
            {[
              <Controller
                key={1}
                control={control}
                name="price"
                render={({ field: { value, onChange } }) => (
                  <PriceFilterWrapper>
                    <PriceFilter min={3500} max={160000} value={value} onChange={onChange} />
                  </PriceFilterWrapper>
                )}
              />,
            ]}
          </FilterContainer>
          {filters.map((filter) => (
            <FilterContainer key={filter.slug} label={filter.name}>
              {filter.options.map((option) => (
                <Controller
                  key={option.slug}
                  control={control}
                  name={filter.slug}
                  render={({ field: { value, name, onChange } }) => {
                    const handleChange = (newValue: boolean) => {
                      const currentValue: string[] = value || [];

                      if (newValue) {
                        onChange([...currentValue, option.slug]);
                      } else {
                        onChange(currentValue.filter((item) => item !== option.slug));
                      }
                    };
                    const checked = value ? value.includes(option.slug) : false;

                    if (option.color) {
                      return (
                        <Checkbox
                          name={name}
                          value={option.slug}
                          checked={checked}
                          onChange={handleChange}
                        >
                          <ColorFilterContent>
                            <ColorCircle color={option.color} />
                            <span>{option.name}</span>
                          </ColorFilterContent>
                        </Checkbox>
                      );
                    }

                    return (
                      <Checkbox
                        name={name}
                        value={option.slug}
                        label={option.name}
                        checked={checked}
                        onChange={handleChange}
                      />
                    );
                  }}
                />
              ))}
            </FilterContainer>
          ))}
        </FiltersContent>
      </Box>
    </Container>
  );
};

export default Filters;
