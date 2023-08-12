import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";

import * as actions from "../../store/actions";

import "./Login.scss";
import { FormattedMessage } from "react-intl";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      isShowPassword: false,
    };
  }

  handleChangeUsername = (e) => {
    this.setState({ username: e.target.value });
  };

  handleChangePassword = (e) => {
    this.setState({ password: e.target.value });
  };

  handleShowPassword = () => {
    this.setState({isShowPassword: !this.state.isShowPassword})
  }

  render() {
    return (
      <div className="login-background">
        <div className="login-container">
          <div className="login-content row">
            <h3 className="col-12 text-center login-title">Login</h3>
            <div className="col-12 form-group login-input">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your username"
                value={this.state.username}
                onChange={this.handleChangeUsername}
              />
            </div>
            <div className="col-12 form-group login-input">
              <label htmlFor="password">Password</label>
              <div className="password-wrapper">
                <input
                  type={this.state.isShowPassword ? 'password' : 'text'}
                  className="form-control"
                  placeholder="Enter your password"
                  value={this.state.password}
                  onChange={this.handleChangePassword}
                />
                <span onClick={this.handleShowPassword}>
                  <i className={this.state.isShowPassword ? "far fa-eye-slash" : "far fa-eye"}></i>
                </span>
              </div>
            </div>
            <div className="col-12">
              <button type="button" className="login-btn">
                Log in
              </button>
            </div>
            <div className="col-12 text-center">
              <span className="forgot-password">Forgot your password?</span>
            </div>
            <div className="col-12 text-center">
              <span className="other-login">Or login with:</span>
            </div>
            <div className="col-12 social-login text-center">
              <i className="fab fa-google-plus-g"></i>
              <i className="fab fa-facebook-f"></i>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    language: state.app.language,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    navigate: (path) => dispatch(push(path)),
    adminLoginSuccess: (adminInfo) =>
      dispatch(actions.adminLoginSuccess(adminInfo)),
    adminLoginFail: () => dispatch(actions.adminLoginFail()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
