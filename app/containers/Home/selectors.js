import { createSelector, createStructuredSelector } from 'reselect';
import { initalState } from './reducer';

const homeRootSelector = (state) => state.home ?? initalState;
const selectCafes = (state) => state.home.cafes;
const selectCafeId = (_, cafeId) => cafeId;

export const cafesSelector = () =>
  createSelector(homeRootSelector, (substate) => substate.cafes);

// export const cafeSelector = () =>
//   createSelector(
//     (state) => state.home.cafes,
//     (_, id) => id,
//     (cafes, cafeId) => {
//       return { ...cafes.filter((cafe) => cafe._id === cafeId)[0] };
//     },
//   );

export const isLoadingSelector = () =>
  createSelector(homeRootSelector, (substate) => substate.isLoading);

export const errorMessageSelector = () =>
  createSelector(homeRootSelector, (substate) => substate.errorMessage);

const homeSelectors = createStructuredSelector({
  cafes: cafesSelector(),
  isLoading: isLoadingSelector(),
  errorMessage: errorMessageSelector(),
});

export default homeSelectors;
