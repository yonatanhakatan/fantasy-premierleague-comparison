export default (state = {}, action) => {
  switch (action.type) {
    case 'PLAYERS_GET_DATA':
      return {
        ...state,
        all: action.players,
      };
    default:
      return state;
  }
};
