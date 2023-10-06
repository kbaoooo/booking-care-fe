/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import Search from "./Search";
import android from "../../assets/images/download-android.svg";
import ios from "../../assets/images/download-ios.svg";
import { languages } from "../../utils";
import { FormattedMessage } from "react-intl";
import { changeLanguageApp } from "../../store/actions/appActions";

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
    return (
      <>
        <div className="home-header-container">
          <div className="home-header-content">
            <div className="content-left">
              <i className="fas fa-bars"></i>
              <div className="header-logo"></div>
            </div>
            <div className="content-mid">
              <div className="child-content">
                <p>
                  <strong>
                    <FormattedMessage id="home_header.specialty" />
                  </strong>
                  <span className="sub-title">
                    <FormattedMessage id="home_header.find_doctor" />
                  </span>
                </p>
              </div>
              <div className="child-content">
                <p>
                  <strong>
                    <FormattedMessage id="home_header.health_facility" />
                  </strong>
                  <span className="sub-title">
                    <FormattedMessage id="home_header.select_room" />
                  </span>
                </p>
              </div>
              <div className="child-content">
                <p>
                  <strong>
                    <FormattedMessage id="home_header.doctor" />
                  </strong>
                  <span className="sub-title">
                    <FormattedMessage id="home_header.select_doctor" />
                  </span>
                </p>
              </div>
              <div className="child-content">
                <p>
                  <strong>
                    <FormattedMessage id="home_header.package" />
                  </strong>
                  <span className="sub-title">
                    <FormattedMessage id="home_header.check_health" />
                  </span>
                </p>
              </div>
            </div>
            <div className="content-right">
              <div className="support">
                <i className="fas fa-question-circle"></i>
                <FormattedMessage id="home_header.support" />
              </div>
              <div className="languagues">
                <select
                  onChange={this.handleChangeLanguage}
                  value={this.state.language}
                >
                  <option value="vie">VIE</option>
                  <option value="en">EN</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div className="home-header-banner">
          <div className="home-header-banner-content">
            <h2 className="home-header-title">
              <FormattedMessage id="banner.title1" />
              <strong>
                <FormattedMessage id="banner.title2" />
              </strong>
            </h2>
            <Search />
            <div className="downloads">
              <div className="download-android">
                <a href="https://play.google.com/store/apps/details?id=vn.bookingcare.bookingcare&pli=1">
                  <img src={android} alt="androi" />
                </a>
              </div>
              <div className="download-ios">
                <a href="https://apps.apple.com/vn/app/bookingcare/id1347700144">
                  <img src={ios} alt="ios" />
                </a>
              </div>
            </div>
          </div>
          <div className="home-header-banner-options">
            <div className="title-row">
              <div className="banner-item">
                <a href="##">
                  <div className="banner-item-icon">
                    <i className="fas fa-hospital"></i>
                  </div>
                  <p className="banner-item-title">
                    <FormattedMessage
                      values={{
                        br: <br />,
                      }}
                      id="banner.child1"
                    />
                  </p>
                </a>
              </div>
              <div className="banner-item">
                <a href="##">
                  <div className="banner-item-icon">
                    <i className="fas fa-phone"></i>
                  </div>
                  <p className="banner-item-title">
                    <FormattedMessage
                      values={{
                        br: <br />,
                      }}
                      id="banner.child2"
                    />
                  </p>
                </a>
              </div>
              <div className="banner-item">
                <a href="##">
                  <div className="banner-item-icon">
                    <i className="fas fa-paste"></i>
                  </div>
                  <p className="banner-item-title">
                    <FormattedMessage
                      values={{
                        br: <br />,
                      }}
                      id="banner.child3"
                    />
                  </p>
                </a>
              </div>
              <div className="banner-item">
                <a href="##">
                  <div className="banner-item-icon">
                    <i className="fas fa-syringe"></i>
                  </div>
                  <p className="banner-item-title">
                    <FormattedMessage
                      values={{
                        br: <br />,
                      }}
                      id="banner.child4"
                    />
                  </p>
                </a>
              </div>
              <div className="banner-item">
                <a href="##">
                  <div className="banner-item-icon">
                    <i className="fas fa-dumbbell"></i>
                  </div>
                  <p className="banner-item-title">
                    <FormattedMessage
                      values={{
                        br: <br />,
                      }}
                      id="banner.child5"
                    />
                  </p>
                </a>
              </div>
            </div>
            <div className="title-row">
              <div className="banner-item">
                <a href="##">
                  <div className="banner-item-icon">
                    <i className="fa-solid fa-house-medical-circle-check"></i>
                  </div>
                  <p className="banner-item-title">
                    <FormattedMessage
                      values={{
                        br: <br />,
                      }}
                      id="banner.child6"
                    />
                  </p>
                </a>
              </div>
              <div className="banner-item">
                <a href="##">
                  <div className="banner-item-icon">
                    <i className="fas fa-hospital"></i>
                  </div>
                  <p className="banner-item-title">
                    <FormattedMessage
                      values={{
                        br: <br />,
                      }}
                      id="banner.child7"
                    />
                  </p>
                </a>
              </div>
              <div className="banner-item">
                <a href="##">
                  <div className="banner-item-icon">
                    <i className="fas fa-hospital"></i>
                  </div>
                  <p className="banner-item-title">
                    <FormattedMessage
                      values={{
                        br: <br />,
                      }}
                      id="banner.child8"
                    />
                  </p>
                </a>
              </div>
              <div className="banner-item">
                <a href="##">
                  <div className="banner-item-icon">
                    <i className="fas fa-hospital"></i>
                  </div>
                  <p className="banner-item-title">
                    <FormattedMessage
                      values={{
                        br: <br />,
                      }}
                      id="banner.child9"
                    />
                  </p>
                </a>
              </div>
              <div className="banner-item">
                <a href="##">
                  <div className="banner-item-icon">
                    <i className="fas fa-hospital"></i>
                  </div>
                  <p className="banner-item-title">
                    <FormattedMessage
                      values={{
                        br: <br />,
                      }}
                      id="banner.child10"
                    />
                  </p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    language: state.app.language,
    isLoggedIn: state.user.isLoggedIn,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeLanguageApp: (language) => {
      dispatch(changeLanguageApp(language));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
