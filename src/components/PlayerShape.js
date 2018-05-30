import PropTypes from 'prop-types';

export const PlayerShape = PropTypes.shape({
  name: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
  created: PropTypes.string.isRequired,
  updated: PropTypes.string
});

export const PlayersShape = PropTypes.arrayOf(PlayerShape);