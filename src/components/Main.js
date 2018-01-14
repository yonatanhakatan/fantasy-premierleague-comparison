import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import styled from 'styled-components';
import * as playersActionCreators from '../redux/actions/players';
import Card from './Card';
import List from './List';

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => ({
  playersActions: bindActionCreators(playersActionCreators, dispatch),
});

const CardGroup = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const renderCards = cards => (
  cards.map((card, index) => (
    <li
      key={card.id}
    >
      <CardGroup>
        {(index > 0) &&
          <strong>V</strong>
        }
        {!card.isPlaceholder &&
          <Card
            {...card}
          />
        }
        {card.isPlaceholder &&
          <div>
            Please add a player using the search box above
          </div>
        }
      </CardGroup>
    </li>
  ))
);

class Main extends Component {
  componentDidMount() {
    const {
      playersActions: {
        getPlayersData,
      },
    } = this.props;

    getPlayersData();
  }

  render() {
    const {
      cards,
    } = this.props;

    if (!cards.length) {
      return null;
    }

    return (
      <List
        horizontal
      >
        {renderCards(cards)}
      </List>
    );
  }
}

Main.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.shape).isRequired,
  playersActions: PropTypes.shape({
    getPlayersData: PropTypes.func.isRequired,
  }).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
