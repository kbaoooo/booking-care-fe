import React, { Component } from "react";
import { connect } from "react-redux";
import Header from "../components/Header/Header";
import { getDetailDoctorInfo } from "../../../services/userService";
import "./DetailDoctor.scss";
import { languages } from "../../../utils";
import DoctorSchedule from "./DoctorSchedule";

class DetailDoctor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      doctorId: null,
      detailDoctor: {},
    };
  }

  async componentDidMount() {
    if (
      this.props.match &&
      this.props.match.params &&
      this.props.match.params.id
    ) {
      let id = this.props.match.params.id;
      let res = await getDetailDoctorInfo(id);
      if (res && res.errCode === 0) {
        this.setState({
          doctorId: id,
          detailDoctor: res.data,
        });
      }
    }
  }

  componentDidUpdate(prevProps, prevState, snapshot) {

  }

  render() {
    const { detailDoctor } = this.state;
    let posiVi, posiEn;
    let { language } = this.props;

    if (detailDoctor && detailDoctor.positionData) {
      posiVi = detailDoctor.positionData.valueVi;
      posiEn = detailDoctor.positionData.valueEn;
    }
    return (
      <div className="detail-doctor">
        <Header data={this.state.detailDoctor} />
        <div className="detail-doctor-content">
          <div className="detail-doctor-info">
            <div className="detail-doctor-header">
              <div className="detail-doctor-avatar">
                <img
                  src={detailDoctor.image || ""}
                  alt=""
                  className="doctor-image"
                />
              </div>
              <div className="detail-doctor-name">
                <h3>
                  {language === languages.VIE ? posiVi : posiEn} II{" "}
                  {detailDoctor.firstName} {detailDoctor.lastName}
                </h3>
                <p>
                  {detailDoctor.Markdown &&
                    detailDoctor.Markdown.description && (
                      <span>{detailDoctor.Markdown.description}</span>
                    )}
                </p>
              </div>
            </div>
            <div className="schedule-doctor">
              <div className="content-left">
                <DoctorSchedule doctorId={this.state.doctorId} />
              </div>
              <div className="content-right"></div>
            </div>
            <div className="detail-doctor-detail-info">
              {detailDoctor &&
                detailDoctor.Markdown &&
                detailDoctor.Markdown.contentHTML && (
                  <p
                    dangerouslySetInnerHTML={{
                      __html: detailDoctor.Markdown.contentHTML,
                    }}
                  ></p>
                )}
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
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(DetailDoctor);
