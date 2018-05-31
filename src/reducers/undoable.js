import * as UndoableActionTypes from '../actiontypes/undoable';
// Since this s a higher level reducer it works for all reducers!
export default function undoable(reducer) {
  // Call the reducer with empty action to populate the initial state
  const initialState = {
    past: [],
    present: reducer(undefined, {}),
    future: []
  };
  // Return a reducer that handles undo and redo
  return (state = initialState, action) => {
    const { past, present, future } = state;

    switch (action.type) {
      case UndoableActionTypes.UNDO:
        const previous = past[past.length - 1];
        const newPast = past.slice(0, past.length - 1);
        return {
          past: newPast,
          present: previous,
          future: [present, ...future]
        };
      case UndoableActionTypes.REDO:
        const next = future[0];
        const newFuture = future.slice(1);
        return {
          past: [...past, present],
          present: next,
          future: newFuture
        };
      default:
        // Delegate handling the action to the passed reducer
        const newPresent = reducer(present, action);
        if (present === newPresent) { // If the new and the current are the same return the passed state
          return state;
        }
        return { // If they are different put the current in the pass and make the present the newPresent
          past: [...past, present],
          present: newPresent,
          future: []
        };
    }
  }
}