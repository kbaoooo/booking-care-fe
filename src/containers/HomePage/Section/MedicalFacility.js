/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { FormattedMessage } from "react-intl";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./MedicalFacility.scss";
import { medicalfacility } from "../../../assets";

class MedicalFacility extends Component {
  render() {
    let settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
    };
    return (
      <div className="section-medical-facility">
        <div className="medical-facility-content">
          <div className="medical-facility-header">
            <h3>Cơ sở y tế nổi bật</h3>
            <button>Tìm kiếm</button>
          </div>
          <div className="medical-facility-body">
            <Slider {...settings}>
              <div className="slick-img">
                <div className="image-content">
                  <img src={medicalfacility.hospital} alt="" />
                </div>
                <p className="medical-facility-title">Bệnh viên trung ương Quân Đội</p>
              </div>
              <div className="slick-img">
                <div className="image-content">
                  <img src={medicalfacility.hospital} alt="" />
                </div>
                <p className="medical-facility-title">Bệnh viên trung ương Quân Đội</p>
              </div>
              <div className="slick-img">
                <div className="image-content">
                  <img src={medicalfacility.hospital} alt="" />
                </div>
                <p className="medical-facility-title">Bệnh viên trung ương Quân Đội</p>
              </div>
              <div className="slick-img">
                <div className="image-content">
                  <img src={medicalfacility.hospital} alt="" />
                </div>
                <p className="medical-facility-title">Bệnh viên trung ương Quân Đội</p>
              </div>
              <div className="slick-img">
                <div className="image-content">
                  <img src={medicalfacility.hospital} alt="" />
                </div>
                <p className="medical-facility-title">Bệnh viên trung ương Quân Đội</p>
              </div>
              <div className="slick-img">
                <div className="image-content">
                  <img src={medicalfacility.hospital} alt="" />
                </div>
                <p className="medical-facility-title">Bệnh viên trung ương Quân Đội</p>
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

export default connect(mapStateToProps, mapDispatchToProps)(MedicalFacility);
