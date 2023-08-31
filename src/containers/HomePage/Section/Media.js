/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { FormattedMessage } from "react-intl";
import { medias } from "../../../assets";
import "./Media.scss";

class Media extends Component {
  render() {
    return (
      <div className="section-media">
        <div className="media-content">
          <div className="media-header">
            <h3>Truyền thông nói về BookingCare</h3>
          </div>
          <div className="media-body">
            <div className="video">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/5baVkO3Nkvs?si=NIci2odtGfbuX3_r"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
            <div className="social-medias">
              <ul>
                <li>
                  <a href="" className="lifeAndHealth">
                    <i></i>
                  </a>
                  <a href="" className="vtv">
                    <i></i>
                  </a>
                  <a href="" className="ictNews">
                    <i></i>
                  </a>
                </li>
                <li>
                  <a href="" className="vnex">
                    <i></i>
                  </a>
                  <a href="" className="vtcNews">
                    <i></i>
                  </a>
                  <a href="" className="techAndMedical">
                    <i></i>
                  </a>
                </li>
                <li>
                  <a href="" className="infoNet">
                    <i></i>
                  </a>
                  <a href="" className="vtv">
                    <i></i>
                  </a>
                  <a href="" className="vtc">
                    <i></i>
                  </a>
                  <a href="" className="vtv">
                    <i></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.user.isLoggedIn,
    languague: state.app["language"],
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Media);
