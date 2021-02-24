import { api } from '_utils/apiUtils';

export const listFriendsService = () => api.get('api/v1/users/friends');
