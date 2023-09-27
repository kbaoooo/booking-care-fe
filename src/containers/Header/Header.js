import React, { Component } from "react";
import { connect } from "react-redux";

import * as actions from "../../store/actions";
import Navigator from "../../components/Navigator";
import { adminMenu } from "./menuApp";
import "./Header.scss";
import { changeLanguageApp } from "../../store/actions";
import { FormattedMessage } from "react-intl";
import { languages } from "../../utils";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      language: this.props.language
    }
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if(prevProps.language !== this.props.language) {
      this.setState({
        language: this.props.language
      })
    }
  }

  handleChangeLanguage = (e) => {
    this.props.changeLanguageApp(e.target.value);
  };

  render() {
    const { processLogout, userInfo, language } = this.props;
    return (
      <div className="header-container">
        {/* thanh navigator */}
        <div className="header-tabs-container">
          <Navigator menus={adminMenu} />
        </div>

        <div className="header-actions">
          <span className="welcome">
            <FormattedMessage id="home_header.welcome" />{" "}
            {userInfo && userInfo.firstName ? userInfo.firstName : ""}!
          </span>
          <select
            className="languages"
            value={this.state.language}
            onChange={this.handleChangeLanguage}
          >
            <option value="vie">VIE</option>
            <option value="en">EN</option>
          </select>

          {/* nút logout */}
          <div className="btn btn-logout" onClick={processLogout}>
            <i className="fas fa-sign-out-alt"></i>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.user.isLoggedIn,
    language: state.app.language,
    userInfo: state.user.userInfo,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    processLogout: () => dispatch(actions.processLogout()),
    changeLanguageApp: (language) => {
      dispatch(changeLanguageApp(language));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
