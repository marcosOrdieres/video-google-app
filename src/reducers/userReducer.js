const isSameRegionReducer = (state = false, action) => {
  switch (action.type) {
    case 'SAME_REGION':
      return action.isSameRegion;
    case 'RESET_USER':
      return false;
    default:
      return state;
  }
};

export default {
  isSameRegion: isSameRegionReducer
};
