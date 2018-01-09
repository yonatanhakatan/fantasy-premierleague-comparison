import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../redux/actions';

const mapStateToProps = (state) => {
  const {
    card,
  } = state;

  return {
    card,
  };
};

const mapDispatchToProps = dispatch => bindActionCreators(actionCreators, dispatch);

const Main = () => (
  <div>
    Hello
  </div>
);

export default connect(mapStateToProps, mapDispatchToProps)(Main);
