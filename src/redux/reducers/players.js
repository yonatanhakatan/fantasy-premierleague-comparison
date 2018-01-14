export default (state = {}, action) => {
  switch (action.type) {
    case 'PLAYERS_GET_DATA':
      return action.players;
    default:
      return state;
  }
};
