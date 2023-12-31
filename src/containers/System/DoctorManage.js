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

const mdParser = new MarkdownIt();

class DoctorManage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contentMarkdown: "",
      contentHTML: "",
      description: "",
      selectedDoctor: {},
      listDoctors: [],
      hasOldData: false,
    };
  }

  componentDidMount() {
    this.props.fetchAllDoctors();
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.allDoctors !== this.props.allDoctors) {
      let dataSelect = this.buildDataSelected(this.props.allDoctors);
      this.setState({
        listDoctors: dataSelect,
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

  handleEditorChange = ({ html, text }) => {
    this.setState({
      contentMarkdown: text,
      contentHTML: html,
    });
  };

  handleChangeSelectDoctor = async (selectedDoctor) => {
    let res = await getDetailDoctorInfo(selectedDoctor.value);
    console.log(res);
    if (res && res.errCode === 0 && res.data && res.data.Markdown) {
      let markdown = res.data.Markdown;
      this.setState({
        contentHTML: markdown.contentHTML,
        contentMarkdown: markdown.contentMarkdown,
        description: markdown.description,
        hasOldData: true
      });
    } else {
      this.setState({
        contentHTML:'',
        contentMarkdown: '',
        description: '',
      });
    }
    this.setState({
      selectedDoctor,
    });
  };

  handleSaveDoctorContent = () => {
    this.props.saveDoctorInfo({
      contentMarkdown: this.state.contentMarkdown,
      contentHTML: this.state.contentHTML,
      selectedDoctor: this.state.selectedDoctor,
      description: this.state.description,
      hasOldData: this.state.hasOldData
    });
  };

  handleChangeDescription = (e) => {
    this.setState({
      description: e.target.value,
    });
  };

  render() {
    return (
      <div className="doctor-manage-container">
        <div className="title">
          <FormattedMessage id="system.doctor-manage.title" />
        </div>
        <div className="more-info">
          <div>
            <label>Thông tin giới thiệu</label>
            <textarea
              className="form-control description"
              rows=""
              cols=""
              onChange={(e) => this.handleChangeDescription(e)}
              value={this.state.description}
            ></textarea>
          </div>
          <div>
            <label htmlFor="">Chọn bác sĩ</label>
            <Select
              value={this.state.selectedDoctor}
              onChange={this.handleChangeSelectDoctor}
              options={this.state.listDoctors}
              className={"select"}
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
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllDoctors: () => dispatch(actions.fetchAllDoctors()),
    saveDoctorInfo: (data) => dispatch(actions.saveDoctorInfo(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DoctorManage);
