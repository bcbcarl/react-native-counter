import React, { PropTypes } from 'react';
import styled from 'styled-components/native';

import { TouchableWithoutFeedback } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Counter from '../components/Counter';

import { increment } from '../actions';

const MainView = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const mapStateToProps = (state) => ({
  state: state.counter
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({ increment }, dispatch)
});

const App = ({ state, actions }) =>
  <TouchableWithoutFeedback onPress={actions.increment}>
    <MainView>
      <Counter count={state.count} />
    </MainView>
  </TouchableWithoutFeedback>;

App.propTypes = {
  state: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
