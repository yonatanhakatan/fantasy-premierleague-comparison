import React from 'react';
import PropTypes from 'prop-types';
import CardData from './CardData';
import CardDataMissing from './CardDataMissing';
import Search from './Search';

const Card = (props) => {
  const {
    id,
  } = props;

  return (
    <section>
      <Search />
      {id &&
        <CardData {...props} />
      }
      {!id &&
        <CardDataMissing />
      }
    </section>
  );
};

Card.defaultProps = {
  id: null,
};

Card.propTypes = {
  id: PropTypes.number,
};

export default Card;
