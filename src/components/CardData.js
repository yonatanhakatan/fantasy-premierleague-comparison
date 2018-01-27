import React from 'react';
import PropTypes from 'prop-types';
import List from './List';

const renderStats = stats => (
  <List>
    {Object.entries(stats).map((stat, index) => (
      <li
        key={index} // eslint-disable-line react/no-array-index-key
      >
        <b>{stat[0]}:</b> {stat[1]}
      </li>
    ))}
  </List>
);

const CardData = (props) => {
  const {
    name,
    club,
    position,
    imageUrl,
    stats,
  } = props;

  return (
    <div>
      <h2>{name}</h2>
      <h3>{club}</h3>
      <div>{position}</div>
      <img src={imageUrl} alt={name} />
      {renderStats(stats)}
    </div>
  );
};

CardData.propTypes = {
  name: PropTypes.string.isRequired,
  club: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  stats: PropTypes.shape().isRequired,
};

export default CardData;
