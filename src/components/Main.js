import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../redux/actions';
import Card from './Card';
import List from './List';

const mapStateToProps = (state) => {
  const {
    card,
  } = state;

  return {
    card,
  };
};

const mapDispatchToProps = dispatch => bindActionCreators(actionCreators, dispatch);

const Main = () => (
  <List>
    <li>
      <Card
        name="Alexis Sanchez"
        club="Arsenal"
        position="Defender"
        imageUrl="https://platform-static-files.s3.amazonaws.com/premierleague/photos/players/110x140/p37265.png"
        stats={{
          Price: '£5.4',
          Form: '3.2',
          'Transfers In': 111903,
          'Transfers Out': 202392,
          'Points Per Game': 3.7,
        }}
      />
    </li>
  </List>
);

export default connect(mapStateToProps, mapDispatchToProps)(Main);
