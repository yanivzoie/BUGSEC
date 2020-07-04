const SORT_BY_ALPHABET = 'SORT_BY_ALPHABET';
const LOAD_DATA = 'LOAD_DATA';
const FILTER_BY_VALUE = 'FILTER_BY_VALUE';
const LOAD_NEW_PAGE = 'LOAD_NEW_PAGE';
const LOAD_EXACT_PAGE = 'LOAD_EXACT_PAGE';

export const filterByValue = (payload) => ({
  type: FILTER_BY_VALUE,
  payload,
});

export const sortByAlphabet = (payload) => ({
  type: SORT_BY_ALPHABET,
  payload,
});

export const loadData = (payload) => ({
  type: LOAD_DATA,
  payload,
});

export const loadNewPage = (payload) => ({
  type: LOAD_NEW_PAGE,
  payload,
});

export const loadExactPage = (payload) => ({
  type: LOAD_EXACT_PAGE,
  payload,
});

export default filterStore;

// function sortAsc(arr, field) {
//   return arr.sort(function (a, b) {
//     if (a[field] > b[field]) return 1;

//     if (b[field] > a[field]) return -1;

//     return 0;
//   });
// }

// function sortDesc(arr, field) {
//   return arr.sort(function (a, b) {
//     if (a[field] > b[field]) return -1;

//     if (b[field] > a[field]) return 1;

//     return 0;
//   });
// }

function addFilterIfNotExists(filter, appliedFilters) {
  let index = appliedFilters.indexOf(filter);
  if (index === -1) appliedFilters.push(filter);

  return appliedFilters;
}

function removeFilter(filter, appliedFilters) {
  let index = appliedFilters.indexOf(filter);
  appliedFilters.splice(index, 1);
  return appliedFilters;
}

const filterByValue = () => (dispatch) => {
  let newState = Object.assign({}, state);
  let value = action.payload.value;
  let filteredValues = state.products.filter((product) => {
    return (
      product.name.toLowerCase().includes(value) ||
      product.designer.toLowerCase().includes(value)
    );
  });

  let appliedFilters = state.appliedFilters;

  if (value) {
    appliedFilters = addFilterIfNotExists(FILTER_BY_VALUE, appliedFilters);

    newState.filteredProducts = filteredValues;
    newState.filteredCount = newState.filteredProducts.length;
    newState.filteredPages = Math.ceil(
      newState.filteredCount / newState.countPerPage
    );
  } else {
    appliedFilters = removeFilter(FILTER_BY_VALUE, appliedFilters);

    if (appliedFilters.length === 0) {
      newState.filteredProducts = newState.products;
      newState.filteredCount = newState.filteredProducts.length;
      newState.filteredPages = Math.ceil(
        newState.filteredCount / newState.countPerPage
      );
    }
  }
  dispatch({ type: FILTER_BY_VALUE, payload: value });
};
