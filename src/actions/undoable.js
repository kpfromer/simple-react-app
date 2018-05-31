import * as UndoableActionTypes from '../actiontypes/undoable';

export const undo = () => {
  return {
    type: UndoableActionTypes.UNDO
  }
};

export const redo = () => {
  return {
    type: UndoableActionTypes.REDO
  }
};
