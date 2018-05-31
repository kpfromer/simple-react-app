import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as UndoableActionCreators from "../actions/undoable";

class UndoRedo extends Component {
  render() {

    const { dispatch, canUndo, canRedo } = this.props;

    const onUndo = bindActionCreators(UndoableActionCreators.undo, dispatch);
    const onRedo = bindActionCreators(UndoableActionCreators.redo, dispatch);

    return (
      <p>
        {
          canUndo &&
          <button onClick={onUndo}>
            Undo
          </button>
        }
        {
          canRedo &&
          <button onClick={onRedo}>
            Redo
          </button>
        }
      </p>
    );
  }
}

const mapStateToProps = state => {
  return {
    canUndo: state.past.length > 0,
    canRedo: state.future.length > 0
  }
};

export default connect(mapStateToProps)(UndoRedo);
