const getPlayersDataAction = players => (
  {
    type: 'PLAYERS_GET_DATA',
    players,
  }
);

export const getPlayersData = () => (
  (dispatch) => {
    // TODO: Replace with actual API call
    const fake = new Promise((resolve) => {
      resolve([
        {
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
        },
        {
          id: 394,
          name: 'Harry Kane',
          club: 'Tottenham Hostpur',
          position: 'Forward',
          imageUrl: 'http://platform-static-files.s3.amazonaws.com/premierleague/photos/players/110x140/p78830.png',
          stats: {
            Price: '£12.9',
            Form: '8.2',
            'Transfers In': 3711560,
            'Transfers Out': 2971452,
            'Points Per Game': 6.7,
          },
        },
      ]);
    });

    fake
      .then((players) => {
        dispatch(getPlayersDataAction(players));
      });
  }
);
