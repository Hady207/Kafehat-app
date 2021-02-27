import { createSelector } from 'reselect';

const selectCafes = (state) => state.home.cafes;
const selectCafeId = (_, cafeId) => cafeId;
// const selectedCafe = (cafes,cafeId) =>{
//   return { ...cafes.filter((cafe) => cafe._id === id)[0] };
// }

export const cafeSelector = () =>
  createSelector(selectCafes, selectCafeId, (cafes, cafeId) => {
    return { ...cafes.filter((cafe) => cafe._id === cafeId)[0] };
  });
