import playersReducer from './players';

it('Should return the correct initial state', () => {
  expect(playersReducer(undefined, {}))
    .toEqual({});
});

it('Should return the correct state when the get players data action is called', () => {
  const playersData = [{
    id: 1,
    name: 'Alexis Sánchez',
    club: 'Arsenal',
    position: 'Forward',
    imageUrl: 'https://platform-static-files.s3.amazonaws.com/premierleague/photos/players/110x140/p37265.png',
    stats: {
      Price: '£11.8',
      Form: '3.2',
      'Transfers In': 111903,
      'Transfers Out': 202392,
      'Points Per Game': 3.7,
    },
  }];

  expect(playersReducer([], {
    type: 'PLAYERS_GET_DATA',
    players: playersData,
  }))
    .toEqual(playersData);
});
