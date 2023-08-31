/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { FormattedMessage } from "react-intl";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Doctors.scss";
import { doctors } from "../../../assets";

class Doctors extends Component {
  render() {
    let settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
    };
    return (
      <div className="section-doctors">
        <div className="doctors-content">
          <div className="doctors-header">
            <h3>Bác sĩ nổi bật tuần qua</h3>
            <button>Tìm kiếm</button>
          </div>
          <div className="doctors-body">
            <Slider {...settings}>
              <div className="slick-img">
                <div className="slick-content">
                  <div className="img-content">
                    <img src={doctors.doctorImg} alt="" />
                  </div>
                  <p className="doctors-title">
                    Khám Nam học, Bệnh viện Nam học và Hiếm muộn Hà Nội
                  </p>
                  <span className="doctors-sub-title">Nam học</span>
                </div>
              </div>
              <div className="slick-img">
                <div className="slick-content">
                  <div className="img-content">
                    <img src={doctors.doctorImg} alt="" />
                  </div>
                  <p className="doctors-title">
                    Khám Nam học, Bệnh viện Nam học và Hiếm muộn Hà Nội
                  </p>
                  <span className="doctors-sub-title">Nam học</span>
                </div>
              </div>
              <div className="slick-img">
                <div className="slick-content">
                  <div className="img-content">
                    <img src={doctors.doctorImg} alt="" />
                  </div>
                  <p className="doctors-title">
                    Khám Nam học, Bệnh viện Nam học và Hiếm muộn Hà Nội
                  </p>
                  <span className="doctors-sub-title">Nam học</span>
                </div>
              </div>
              <div className="slick-img">
                <div className="slick-content">
                  <div className="img-content">
                    <img src={doctors.doctorImg} alt="" />
                  </div>
                  <p className="doctors-title">
                    Khám Nam học, Bệnh viện Nam học và Hiếm muộn Hà Nội
                  </p>
                  <span className="doctors-sub-title">Nam học</span>
                </div>
              </div>
              <div className="slick-img">
                <div className="slick-content">
                  <div className="img-content">
                    <img src={doctors.doctorImg} alt="" />
                  </div>
                  <p className="doctors-title">
                    Khám Nam học, Bệnh viện Nam học và Hiếm muộn Hà Nội
                  </p>
                  <span className="doctors-sub-title">Nam học</span>
                </div>
              </div>
              <div className="slick-img">
                <div className="slick-content">
                  <div className="img-content">
                    <img src={doctors.doctorImg} alt="" />
                  </div>
                  <p className="doctors-title">
                    Khám Nam học, Bệnh viện Nam học và Hiếm muộn Hà Nội
                  </p>
                  <span className="doctors-sub-title">Nam học</span>
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

export default connect(mapStateToProps, mapDispatchToProps)(Doctors);
