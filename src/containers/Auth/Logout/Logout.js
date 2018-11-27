import React, { Component } from "react";
import * as actions from "../../../store/actions/index";
import { Redirect } from "react-router-dom";



class Logout extends Component {
  componenDidMount () {
    this.props.onLogout();
  }

  render() {
    return (
      <Redirect to="/" />
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onLogout: () => dispatch(actions.logout())
  };
};

export default Logout;
