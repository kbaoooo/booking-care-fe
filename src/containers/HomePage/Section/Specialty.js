/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { FormattedMessage } from "react-intl";
import "./Specialty.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { specialty } from "../../../assets";

class Specialty extends Component {
  render() {
    let settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
    };
    return (
      <div className="section-specialty">
        <div className="specialty-content">
          <div className="specialty-header">
            <h3>Chuyên khoa phổ biến</h3>
            <button>Xem thêm</button>
          </div>
          <div className="specialty-body">
            <Slider {...settings}>
              <div className="slick-img">
                <div className="image-content">
                  <img src={specialty.boneImg} alt="" />
                </div>
                <p className="specialty-title">Khoa xương khớp</p>
              </div>
              <div className="slick-img">
                <div className="image-content">
                  <img src={specialty.boneImg} alt="" />
                </div>
                <p className="specialty-title">Khoa xương khớp</p>
              </div>
              <div className="slick-img">
                <div className="image-content">
                  <img src={specialty.boneImg} alt="" />
                </div>
                <p className="specialty-title">Khoa xương khớp</p>
              </div>
              <div className="slick-img">
                <div className="image-content">
                  <img src={specialty.boneImg} alt="" />
                </div>
                <p className="specialty-title">Khoa xương khớp</p>
              </div>
              <div className="slick-img">
                <div className="image-content">
                  <img src={specialty.boneImg} alt="" />
                </div>
                <p className="specialty-title">Khoa xương khớp</p>
              </div>
              <div className="slick-img">
                <div className="image-content">
                  <img src={specialty.boneImg} alt="" />
                </div>
                <p className="specialty-title">Khoa xương khớp</p>
              </div>
            </Slider>
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

export default connect(mapStateToProps, mapDispatchToProps)(Specialty);
