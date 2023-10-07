import React, { Component } from "react";
import { connect } from "react-redux";
import "./ManageSchedule.scss";
import { FormattedMessage } from "react-intl";
import * as actions from "../../../store/actions";
import Select from "react-select";
import DatePicker from "../../../components/Input/DatePicker";
import { languages } from "../../../utils";
import moment from "moment";
import { toast } from "react-toastify";

class ManageSchedule extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedDoctor: {},
      listDoctors: [],
      currentDate: "",
      allScheduleTime: [],
    };
  }

  componentDidMount() {
    this.props.fetchAllDoctors();
    this.props.fetchAllCodeScheduleTime("TIME");
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.allDoctors !== this.props.allDoctors) {
      let dataSelect = this.buildDataSelected(this.props.allDoctors);
      this.setState({
        listDoctors: dataSelect,
      });
    }
    if (prevProps.allScheduleTimeRedux !== this.props.allScheduleTimeRedux) {
      let data = this.props.allScheduleTimeRedux;
      if (data && data.length > 0) {
        data.map((item) => {
          item.isSelected = false;
          return item;
        });
      }

      this.setState({
        allScheduleTime: data,
      });
    }
  }

  buildDataSelected = (inputData) => {
    let res = [];
    if (inputData && inputData.length > 0) {
      inputData.map((data, index) => {
        let obj = {};
        obj.label = `${data.firstName} ${data.lastName}`;
        obj.value = data.id;
        res.push(obj);
      });
    }
    return res;
  };

  handleChangeSelectDoctor = async (selectedDoctor) => {
    this.setState({
      selectedDoctor,
    });
  };

  handleChangeDate = (date) => {
    this.setState({
      currentDate: date[0],
    });
  };

  handleChooseTime = (time) => {
    const { allScheduleTime } = this.state;
    if (allScheduleTime && allScheduleTime.length > 0) {
      let times = allScheduleTime.map((item) => {
        if (item.id === time.id) {
          item.isSelected = !item.isSelected;
        }
        return item;
      });
      this.setState({
        allScheduleTime: times,
      });
    }
  };

  handleSaveSchedule = () => {
    let { allScheduleTime, selectedDoctor, currentDate } = this.state;
    if (!currentDate || currentDate === "Invalid Date") {
      toast.error("Invalid Date");
      return;
    }
    console.log(currentDate);
  };

  render() {
    let { allScheduleTime } = this.state;
    let { language } = this.props;

    return (
      <div className="manage-schedule-container">
        <h2 className="manage-schedule-title">
          <FormattedMessage id="menu.doctor.manage-schedule.title" />
        </h2>
        <div className="container">
          <div className="row">
            <div className="col-6 form-group">
              <label htmlFor="">
                <FormattedMessage id="menu.doctor.manage-schedule.choose-doctor" />
              </label>
              <Select
                value={this.state.selectedDoctor}
                onChange={this.handleChangeSelectDoctor}
                options={this.state.listDoctors}
                className={"select"}
              />
            </div>
            <div className="col-6 form-group">
              <label htmlFor="">
                <FormattedMessage id="menu.doctor.manage-schedule.choose-time" />
              </label>
              <DatePicker
                onChange={this.handleChangeDate}
                className="form-control"
                value={this.state.currentDate}
                minDate={new Date()}
              />
            </div>
            <div className="picked-date col-12">
              {allScheduleTime &&
                allScheduleTime.length > 0 &&
                allScheduleTime.map((time, index) => {
                  return (
                    <button
                      className={
                        time.isSelected ? "button-time active" : "button-time"
                      }
                      key={index}
                      onClick={() => this.handleChooseTime(time)}
                    >
                      {language === languages.VIE ? time.valueVI : time.valueEN}
                    </button>
                  );
                })}
            </div>
            <button
              type="button"
              className="btn btn-primary"
              onClick={this.handleSaveSchedule}
            >
              <FormattedMessage id="common.save" />
            </button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    language: state.app.language,
    allDoctors: state.admin.allDoctors,
    allScheduleTimeRedux: state.admin.allScheduleTime,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllDoctors: () => dispatch(actions.fetchAllDoctors()),
    saveDoctorInfo: (data) => dispatch(actions.saveDoctorInfo(data)),
    fetchAllCodeScheduleTime: (type) =>
      dispatch(actions.fetchAllCodeScheduleTime(type)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageSchedule);
