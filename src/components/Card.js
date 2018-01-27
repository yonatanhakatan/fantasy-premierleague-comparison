import React from 'react';
import PropTypes from 'prop-types';
import CardData from './CardData';
import CardDataMissing from './CardDataMissing';

const Card = (props) => {
  const {
    id,
  } = props;

  return (
    <section>
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
