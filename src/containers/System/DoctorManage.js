import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import "./DoctorManage.scss";
import * as actions from "../../store/actions";
import "react-image-lightbox/style.css";
import { getDetailDoctorInfo } from "../../services/userService";

import Select from "react-select";

import MarkdownIt from "markdown-it";
import MdEditor from "react-markdown-editor-lite";
import "react-markdown-editor-lite/lib/index.css";
import { languages } from "../../utils";

const mdParser = new MarkdownIt();

class DoctorManage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contentMarkdown: "",
      contentHTML: "",
      description: "",
      selectedDoctor: "",
      listDoctors: [],
      hasOldData: false,
      listPrice: [],
      listPayment: [],
      listProvince: [],
      selectedPrice: "",
      selectedPayment: "",
      selectedProvince: "",
      nameClinic: "",
      addressClinic: "",
      note: "",
    };
  }

  componentDidMount() {
    this.props.fetchAllDoctors();
    this.props.fetchRequiredDoctorInfo();
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.allDoctors !== this.props.allDoctors) {
      let dataSelect = this.buildDataSelected(this.props.allDoctors);
      this.setState({
        listDoctors: dataSelect,
      });
    }

    if (prevProps.allRequiredDoctorInfo !== this.props.allRequiredDoctorInfo) {
      let { resPayment, resPrice, resProvince } =
        this.props.allRequiredDoctorInfo;
      let dataSelectPrice = this.buildDataSelected(resPrice, "info");
      let dataSelectPayment = this.buildDataSelected(resPayment, "info");
      let dataSelectProvince = this.buildDataSelected(resProvince, "info");

      this.setState({
        listPrice: dataSelectPrice,
        listPayment: dataSelectPayment,
        listProvince: dataSelectProvince,
      });
    }
  }

  buildDataSelected = (inputData, type = "human") => {
    let res = [];
    let { language } = this.props;
    if (inputData && inputData.length > 0) {
      inputData.map((data, index) => {
        let obj = {};
        if (type === "human") {
          obj.label = `${data.firstName} ${data.lastName}`;
          obj.value = data.id;
        } else {
          language === languages.VIE
            ? (obj.label = `${data.valueVI}`)
            : (obj.label = `${data.valueEN}`);
          obj.value = data.keyMap;
        }
        res.push(obj);
      });
    }

    return res;
  };

  handleEditorChange = ({ html, text }) => {
    this.setState({
      contentMarkdown: text,
      contentHTML: html,
    });
  };

  handleChangeSelectDoctor = async (selectedDoctor) => {
    let res = await getDetailDoctorInfo(selectedDoctor.value);
    if (res && res.errCode === 0 && res.data && res.data.Markdown) {
      let markdown = res.data.Markdown;
      this.setState({
        contentHTML: markdown.contentHTML,
        contentMarkdown: markdown.contentMarkdown,
        description: markdown.description,
        hasOldData: true,
      });
    } else {
      this.setState({
        contentHTML: "",
        contentMarkdown: "",
        description: "",
      });
    }
    this.setState({
      selectedDoctor,
    });
  };

  handleChangeSelectDoctorInfo = async (selectedOption, name) => {
    let stateName = name.name;
    let stateCopy = { ...this.state };
    stateCopy[stateName] = selectedOption;
    this.setState({
      ...stateCopy,
    });

    console.log(selectedOption, stateName);
  };

  handleSaveDoctorContent = () => {
    this.props.saveDoctorInfo({
      contentMarkdown: this.state.contentMarkdown,
      contentHTML: this.state.contentHTML,
      selectedDoctor: this.state.selectedDoctor,
      description: this.state.description,
      hasOldData: this.state.hasOldData,

      selectedPrice: this.state.selectedPrice.value,
      selectedPayment: this.state.selectedPayment.value,
      selectedProvince: this.state.selectedProvince.value,
      nameClinic: this.state.nameClinic,
      addressClinic: this.state.addressClinic,
      note: this.state.note,
    });
  };

  handleChangeDescription = (e) => {
    this.setState({
      description: e.target.value,
    });
  };

  handleChangeText = (e, state) => {
    let stateCopy = { ...this.state };
    stateCopy[state] = e.target.value;
    this.setState({
      ...stateCopy,
    });
  };

  render() {
    return (
      <div className="doctor-manage-container">
        <div className="title">
          <FormattedMessage id="system.doctor-manage.title" />
        </div>
        <div className="more-info">
          <div className="form-group">
            <label htmlFor="">
              <FormattedMessage id="system.doctor-manage.choose-doctor" />
            </label>
            <Select
              value={this.state.selectedDoctor}
              onChange={this.handleChangeSelectDoctor}
              options={this.state.listDoctors}
              className={"select"}
              placeholder={"Chọn bác sĩ"}
            />
          </div>
          <div className="form-group">
            <label>
              <FormattedMessage id="system.doctor-manage.intro-info" />
            </label>
            <textarea
              className="form-control description"
              rows=""
              cols=""
              onChange={(e) => this.handleChangeDescription(e)}
              value={this.state.description}
            ></textarea>
          </div>
        </div>
        <div className="d-flex">
          <div className="col-4 form-group">
            <label htmlFor="">Chọn giá khám</label>
            <Select
              name="selectedPrice"
              value={this.state.selectedPrice}
              onChange={this.handleChangeSelectDoctorInfo}
              options={this.state.listPrice}
              className={"select"}
              placeholder={"Chọn giá khám"}
            />
          </div>
          <div className="col-4 form-group">
            <label htmlFor="">Chọn phương thức thanh toán</label>
            <Select
              name="selectedPayment"
              value={this.state.selectedPayment}
              onChange={this.handleChangeSelectDoctorInfo}
              options={this.state.listPayment}
              className={"select"}
              placeholder={"Chọn phương thức"}
            />
          </div>
          <div className="col-4 form-group">
            <label htmlFor="">Chọn tỉnh thành</label>
            <Select
              name="selectedProvince"
              value={this.state.selectedProvince}
              onChange={this.handleChangeSelectDoctorInfo}
              options={this.state.listProvince}
              className={"select"}
              placeholder={"Chọn tỉnh thành"}
            />
          </div>
        </div>
        <div className="d-flex">
        <div className="col-4 form-group">
            <label htmlFor="">Tên phòng khám</label>
            <input
              type="text"
              name="clinic-name"
              value={this.state.nameClinic}
              onChange={(e) => this.handleChangeText(e, 'nameClinic')}
              className="form-control"
            />
          </div>
          <div className="col-4 form-group">
            <label htmlFor="">Địa chỉ phòng khám</label>
            <input
              type="text"
              name="clinic-add"
              value={this.state.addressClinic}
              onChange={(e) => this.handleChangeText(e, 'addressClinic')}
              className="form-control"
            />
          </div>
          <div className="col-4 form-group">
            <label htmlFor="">Ghi chú</label>
            <input
              type="text"
              name="note"
              value={this.state.note}
              onChange={(e) => this.handleChangeText(e, 'note')}
              className="form-control"
            />
          </div>
        </div>
        <div className="doctor-manage-editor">
          <MdEditor
            style={{ height: "500px" }}
            renderHTML={(text) => mdParser.render(text)}
            onChange={this.handleEditorChange}
            value={this.state.contentMarkdown}
          />
        </div>
        <button
          className="btn save-doctor-content center"
          onClick={this.handleSaveDoctorContent}
        >
          <FormattedMessage id={"system.user-manage.save"} />
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    language: state.app.language,
    allDoctors: state.admin.allDoctors,
    allRequiredDoctorInfo: state.admin.allRequiredDoctorInfo,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllDoctors: () => dispatch(actions.fetchAllDoctors()),
    saveDoctorInfo: (data) => dispatch(actions.saveDoctorInfo(data)),
    fetchRequiredDoctorInfo: () => dispatch(actions.fetchRequiredDoctorInfo()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DoctorManage);
