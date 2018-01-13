import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import styled from 'styled-components';
import * as actionCreators from '../redux/actions';
import Card from './Card';
import List from './List';

const mapStateToProps = (state) => {
  const {
    cards,
  } = state;

  return {
    cards,
  };
};

const mapDispatchToProps = dispatch => bindActionCreators(actionCreators, dispatch);

const CardGroup = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const renderCards = players => (
  players.map((player, index) => (
    <li
      key={player.id}
    >
      <CardGroup>
        {(index > 0) &&
          <strong>V</strong>
        }
        <Card
          {...player}
        />
      </CardGroup>
    </li>
  ))
);

const Main = (props) => {
  const {
    cards: {
      players,
    },
  } = props;

  if (!players) {
    return null;
  }

  return (
    <List
      horizontal
    >
      {renderCards(players)}
    </List>
  );
};

Main.propTypes = {
  cards: PropTypes.shape({
    players: PropTypes.arrayOf(PropTypes.shape).isRequired,
  }).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
