import { createActions } from 'reduxsauce';

export const { Types: HomeTypes, Creators: HomeActions } = createActions({
  fetchHomeRequest: null,
  fetchHomeSuccess: ['cafes'],
  fetchHomeFail: ['error'],
});

export const initalState = {
  isLoading: false,
  cafes: [],
  errorMessage: null,
};

const fetchCafeRequest = (state) => ({ ...state, isLoading: true });

const successCafeRequest = (state, { cafes }) => ({
  ...state,
  isLoading: false,
  cafes,
});

const failedCafeRequest = (state, { error }) => ({
  ...state,
  errorMessage: error,
});

// const failedCafeRequest = () => ({})

export const homeReducer = (state = initalState, action) => {
  switch (action.type) {
    case HomeTypes.FETCH_HOME_REQUEST:
      return fetchCafeRequest(state);
    case HomeTypes.FETCH_HOME_SUCCESS:
      return successCafeRequest(state, action);
    case HomeTypes.FETCH_HOME_FAIL:
      return failedCafeRequest(state, action);
    default:
      return state;
  }
};
