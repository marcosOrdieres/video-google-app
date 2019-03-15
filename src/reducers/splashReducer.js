const isVersionAllowedReducer = (state = false, action) => {
  switch (action.type) {
    case 'checkVersion':
      return action.isVersionAllowed;
    default:
      return state;
  }
};

const isUserLoggedInReducer = (state = false, action) => {
  switch (action.type) {
    case 'checkIfLoggedIn':
      return action.isUserLoggedIn;
    default:
      return state;
  }
};

export default {
  isVersionAllowed: isVersionAllowedReducer,
  isUserLoggedIn: isUserLoggedInReducer
};
