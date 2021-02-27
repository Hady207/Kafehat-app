import { createActions } from 'reduxsauce';

export const { Types: FriendsTypes, Creators: FriendsActions } = createActions({
  fetchFriendsRequest: null,
  fetchFriendsSuccess: ['friends'],
  fetchFriendsFail: ['error'],
});

export const initalState = {
  isLoading: false,
  friends: null,
  errorMessage: null,
};

export const friendsReducer = (state = initalState, action) => {
  switch (action.type) {
    case FriendsTypes.FETCH_FRIENDS_REQUEST:
      return { ...state, isLoading: true };
    case FriendsTypes.FETCH_FRIENDS_SUCCESS:
      return { ...state, isLoading: false, friends: action.friends };
    case FriendsTypes.FETCH_FRIENDS_FAIL:
      return { ...state, isLoading: false, errorMessage: action.error };
    default:
      return state;
  }
};
