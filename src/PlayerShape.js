import PropTypes from 'prop-types';

export const PlayerShape = PropTypes.shape({
  name: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired
});

export const PlayersShape = PropTypes.arrayOf(PlayerShape);