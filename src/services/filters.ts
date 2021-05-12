import filters from 'data/filters.json';

export type Filter = {
  name: string;
  slug: string;
  options: {
    name: string;
    color: string | null;
    slug: string;
  }[];
};

export const getFilters = (): Promise<Filter[]> =>
  new Promise((resolve) => setTimeout(resolve, 300)).then(() => filters);
