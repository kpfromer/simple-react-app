import * as PlayerActionTypes from '../actiontypes/player';

const initialState = [
    {
      name: 'Kyle Pfromer',
      score: 30,
      id: 1
    },
    {
      name: 'Ben Groover',
      score: 31,
      id: 2
    },
    {
      name: 'Sean Hinds',
      score: 35,
      id: 3
    }
];

// Should be a pure function (does not mutate the state)
export default function Player(state = initialState, action) {
  // We use action.type seen in the type in actions/player.js and name aswell
  switch (action.type) {
    case PlayerActionTypes.ADD_PLAYER:
      return [
        ...state,
        {
          name: action.name,
          score: 0
        }
      ];
    case PlayerActionTypes.REMOVE_PLAYER:
      return [
        ...state.slice(0, action.index),
        ...state.slice(action.index + 1)
      ];
    case PlayerActionTypes.UPDATE_PLAYER_SCORE:
      return state.map((player, index) => {
        if (index === action.index) {
          return {
            ...player,
            score: player.score + action.score
          }
        }

        return player;
      });
    default:
      return state;
  }
}