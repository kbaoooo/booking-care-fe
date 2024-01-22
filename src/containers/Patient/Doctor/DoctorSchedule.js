import React, { Component } from "react";
import { connect } from "react-redux";
import "./DoctorSchedule.scss";
import moment from "moment";
import localization from "moment/locale/vi";
import { languages } from "../../../utils";
import { getScheduleByDateDoctor } from "../../../services/userService";
import { FormattedMessage } from "react-intl";

class DoctorSchedule extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allDays: [],
      allTimes: [],
    };
  }

  capitalizeLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  getDays = () => {
    let { language } = this.props;
    let arrDays = [];
    for (let i = 0; i < 7; i++) {
      let obj = {};
      if (language === languages.VIE) {
        if(i === 0) {
          let ddMM = moment(new Date()).format('DD/MM')
          let today = `Hôm nay - ${ddMM}`;
          obj.label = today
        } else {
          let labelVie = moment(new Date()).add(i, "days").format("dddd - DD/MM");
          obj.label = this.capitalizeLetter(labelVie);
        }
      } else {
        if(i === 0) {
          let ddMM = moment(new Date()).format('DD/MM')
          let today = `Today - ${ddMM}`;
          obj.label = today
        } else {
          obj.label = moment(new Date())
            .add(i, "days")
            .locale("en")
            .format("ddd - DD/MM");
        }
      }
      obj.value = moment(new Date()).add(i, "days").startOf("day").valueOf();

      arrDays.push(obj);
    }

    return arrDays;
  };

  async componentDidMount() {
    let arrDays = this.getDays();
    let { doctorId } = this.props;
    let dataTime = [];
    if (doctorId) {
      let date = arrDays[0].value;
      let response = await getScheduleByDateDoctor(doctorId, date);
      if (response && response.errCode === 0) {
        dataTime = response.data;
      }
    }
    this.setState({
      allDays: arrDays,
      allTimes: dataTime,
    });
  }

  async componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.doctorId !== prevProps.doctorId) {
      let arrDays = this.getDays();
      let { doctorId } = this.props;
      let dataTime = [];
      if (doctorId) {
        let date = arrDays[0].value;
        let response = await getScheduleByDateDoctor(doctorId, date);
        if (response && response.errCode === 0) {
          dataTime = response.data;
        }
      }
      this.setState({
        allDays: arrDays,
        allTimes: dataTime
      });
    }
  }

  handleChangeSelect = async (e) => {
    let { doctorId } = this.props;
    if (doctorId) {
      let date = e.target.value;
      let response = await getScheduleByDateDoctor(doctorId, date);
      let dataTime = [];
      if (response && response.errCode === 0) {
        dataTime = response.data;
        this.setState({
          allTimes: dataTime,
        });
      }
    }
  };

  render() {
    let { allDays, allTimes } = this.state;
    let { language } = this.props;
    return (
      <div className="doctor-schedule-container">
        <div className="all-schedules">
          <select className="choose-date" onChange={this.handleChangeSelect}>
            {allDays &&
              allDays.length > 0 &&
              allDays.map((item, index) => {
                return (
                  <option
                    className="choose-date-item"
                    key={index}
                    value={item.value}
                  >
                    {item.label}
                  </option>
                );
              })}
          </select>
        </div>
        <div className="all-available-time">
          <div className="calendar-title">
            <span>
              <i className="fas fa-calendar-alt"></i> <strong>
                <FormattedMessage id={"menu.doctor.manage-schedule.check-health-schedule"}/>
              </strong>
            </span>
          </div>
          <div className="calendar-list">
            {allTimes &&
              allTimes.length > 0 &&
              allTimes.map((item, index) => {
                let timeDisplay =
                  language === languages.VIE
                    ? item.timeTypeData.valueVI
                    : item.timeTypeData.valueEN;
                return (
                  <button key={index} type="button" className="time-btn">
                    {timeDisplay}
                  </button>
                );
              })}
            {allTimes && allTimes.length === 0 && (
              <p>Không có lịch hẹn nào trong ngày!</p>
            )}
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

export default connect(mapStateToProps, mapDispatchToProps)(DoctorSchedule);



