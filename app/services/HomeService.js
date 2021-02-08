import { api } from '_utils/apiUtils';

export const getHomeCafes = () => api.get('api/v1/cafes');
