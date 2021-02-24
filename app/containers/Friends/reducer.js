import { createActions } from 'reduxsauce';

export const { Types: FriendsTypes, Creators: FriendsActions } = createActions({
  fetchRequest: null,
  fetchSuccess: ['friends'],
  fetchFail: ['error'],
});

export const initalState = {
  isLoading: false,
  friends: null,
  errorMessage: null,
};

export const friendsReducer = (state = initalState, action) => {
  switch (action.type) {
    case FriendsTypes.FETCH_REQUEST:
      return { ...state, isLoading: true };
    case FriendsTypes.FETCH_SUCCESS:
      return { ...state, isLoading: false, friends: action.friends };
    case FriendsTypes.FETCH_FAIL:
      return { ...state, isLoading: false, errorMessage: action.error };
    default:
      return state;
  }
};
