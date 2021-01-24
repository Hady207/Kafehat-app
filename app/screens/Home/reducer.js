import { createActions } from 'reduxsauce';

export const { Types: HomeTypes, Creators: HomeActions } = createActions({
  fetchHome: null,
});

export const initalState = {
  isLoading: false,
  posts: [],
};

export const homeReducer = (state = initalState, action) => {
  switch (action.type) {
    case HomeTypes.FETCH_HOME:
      return { ...state, posts: action.posts };
    default:
      return state;
  }
};
