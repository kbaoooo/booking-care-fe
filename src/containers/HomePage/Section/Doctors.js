/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { FormattedMessage } from "react-intl";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Doctors.scss";
import * as actions from "../../../store/actions";
import { languages } from "../../../utils";
import { withRouter } from "react-router";

class Doctors extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arrDoctors: [],
    };
  }

  componentDidMount() {
    this.props.fetchTopDoctors();
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.topDoctorsRedux !== this.props.topDoctorsRedux) {
      this.setState({
        arrDoctors: this.props.topDoctorsRedux,
      });
    }
  }

  handleViewDetailDoctor = (doctor) => {
    console.log(doctor);
    this.props.history.push(`/detail-doctor/${doctor.id}`)
  }

  render() {
    let doctors = this.state.arrDoctors
      .concat(this.state.arrDoctors)
      .concat(this.state.arrDoctors)
      .concat(this.state.arrDoctors)
      .concat(this.state.arrDoctors)
      .concat(this.state.arrDoctors)
      .concat(this.state.arrDoctors)
      .concat(this.state.arrDoctors)
      .concat(this.state.arrDoctors)
      .concat(this.state.arrDoctors);

    let { language } = this.props;

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
            <h3><FormattedMessage id={"home-page.doctors"} /></h3>
            <button><FormattedMessage id={"home-page.search"}/></button>
          </div>
          <div className="doctors-body">
            <Slider {...settings}>
              {doctors &&
                doctors.length > 0 &&
                doctors.map((doctor, index) => {
                  let imageBase64 = "";
                  if (doctor.image) {
                    imageBase64 = new Buffer(doctor.image, "base64").toString(
                      "binary"
                    );
                  }
                  let valueEn = `${doctor.positionData.valueEn}, ${doctor.firstName} ${doctor.lastName}`;
                  let valueVi = `${doctor.positionData.valueVi}, ${doctor.firstName} ${doctor.lastName}`;
                  return (
                    <div className="slick-img" key={index} onClick={() => this.handleViewDetailDoctor(doctor)}>
                      <div className="slick-content">
                        <div className="img-content">
                          {imageBase64 && (
                            <div
                              className="image"
                              style={{
                                backgroundImage: `url(${imageBase64})`,
                                backgroundRepeat: "no-repeat",
                                backgroundPosition: "center",
                                backgroundSize: "cover",
                              }}
                              onClick={this.openPreviewImg}
                            ></div>
                          )}
                        </div>
                        <p className="doctors-title">
                          {language === languages.VIE ? valueVi : valueEn}
                        </p>
                        <span className="doctors-sub-title">Nam học</span>
                      </div>
                    </div>
                  );
                })}
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
    language: state.app.language,
    topDoctorsRedux: state.admin.topDoctors,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchTopDoctors: () => dispatch(actions.fetchTopDoctors()),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Doctors));
