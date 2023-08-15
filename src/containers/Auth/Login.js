import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";

import * as actions from "../../store/actions";

import "./Login.scss";

// eslint-disable-next-line
import { FormattedMessage } from "react-intl";

import { handleLoginApi } from "../../services/userService";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      errMessage: '',
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

  handleLogin = async () => {
    this.setState({
      errMessage: ''
    })
    try {
      let response = await handleLoginApi(this.state.username, this.state.password)
      if(response && response.errCode !== 0) {
        this.setState({
          errMessage: response.message
        })
      } if(response && response.errCode === 0) {
        this.props.userLoginSuccess(response.data.email)
      }
    } catch(err) {
      this.setState({
        errMessage: err.response.data.message
      })
    }
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
                  type={!this.state.isShowPassword ? 'password' : 'text'}
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
            <div style={{color: 'red'}}>
              {this.state.errMessage}
            </div>
            <div className="col-12">
              <button className="login-btn" onClick={this.handleLogin}>
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
    //userLoginFail: () => dispatch(actions.adminLoginFail()),
    userLoginSuccess: (userInfo) => dispatch(actions.userLoginSuccess(userInfo))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
