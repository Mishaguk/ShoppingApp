export const getProducts = (filter) => (state) =>
  filter
    ? state.catalog.products.filter(({ name }) =>
        name.toLowerCase().includes(filter.toLowerCase())
      )
    : state.catalog.products;

export const getFilter = (state) => {
  return state.catalog.filter;
};
