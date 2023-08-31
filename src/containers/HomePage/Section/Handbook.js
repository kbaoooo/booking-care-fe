/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { FormattedMessage } from "react-intl";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Handbook.scss";
import { handbook } from "../../../assets";

class Handbook extends Component {
  render() {
    let settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 2,
    };
    return (
      <div className="section-handbook">
        <div className="handbook-content">
          <div className="handbook-header">
            <h3>Cẩm nang</h3>
            <button>Tất cả bài viết</button>
          </div>
          <div className="handbook-body">
            <Slider {...settings}>
              <div className="slick-img">
                <div className="slick-content">
                  <div className="img-content">
                    <img src={handbook.handbookImg} alt="" />
                  </div>
                  <p className="handbook-title">
                    Khám Nam học, Bệnh viện Nam học và Hiếm muộn Hà Nội
                  </p>
                </div>
              </div>
              <div className="slick-img">
                <div className="slick-content">
                  <div className="img-content">
                    <img src={handbook.handbookImg} alt="" />
                  </div>
                  <p className="handbook-title">
                    Khám Nam học, Bệnh viện Nam học và Hiếm muộn Hà Nội
                  </p>
                </div>
              </div>
              <div className="slick-img">
                <div className="slick-content">
                  <div className="img-content">
                    <img src={handbook.handbookImg} alt="" />
                  </div>
                  <p className="handbook-title">
                    Khám Nam học, Bệnh viện Nam học và Hiếm muộn Hà Nội
                  </p>
                </div>
              </div>
              <div className="slick-img">
                <div className="slick-content">
                  <div className="img-content">
                    <img src={handbook.handbookImg} alt="" />
                  </div>
                  <p className="handbook-title">
                    Khám Nam học, Bệnh viện Nam học và Hiếm muộn Hà Nội
                  </p>
                </div>
              </div>
              <div className="slick-img">
                <div className="slick-content">
                  <div className="img-content">
                    <img src={handbook.handbookImg} alt="" />
                  </div>
                  <p className="handbook-title">
                    Khám Nam học, Bệnh viện Nam học và Hiếm muộn Hà Nội
                  </p>
                </div>
              </div>
              <div className="slick-img">
                <div className="slick-content">
                  <div className="img-content">
                    <img src={handbook.handbookImg} alt="" />
                  </div>
                  <p className="handbook-title">
                    Khám Nam học, Bệnh viện Nam học và Hiếm muộn Hà Nội
                  </p>
                </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Handbook);
