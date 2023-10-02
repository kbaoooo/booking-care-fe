import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import "./UserRedux.scss";
import { languages, CommonUtils } from "../../../utils";
import * as actions from "../../../store/actions";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import TableManageUser from "./TableManageUser";
// import react, react-markdown-editor-lite, and a markdown parser you like
import MarkdownIt from "markdown-it";
import MdEditor from "react-markdown-editor-lite";
// import style manually
import "react-markdown-editor-lite/lib/index.css";

// Register plugins if required
// MdEditor.use(YOUR_PLUGINS_HERE);

// Initialize a markdown parser
const mdParser = new MarkdownIt(/* Markdown-it options */);

// Finish!
function handleEditorChange({ html, text }) {
  console.log("handleEditorChange", html, text);
}

class UserRedux extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      address: "",
      phone: "",
      gender: "",
      position: "",
      role: "",
      previewImg: "",
      avatar: "",

      genders: [],
      positions: [],
      roles: [],
      isShowPassword: false,
      isOpen: false,
    };
  }

  async componentDidMount() {
    await this.props.getRoleStart();
    await this.props.getPositionStart();
    await this.props.getGenderStart();
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.genderRedux !== this.props.genderRedux) {
      this.setState({
        genders: this.props.genderRedux,
        gender:
          this.props.genderRedux && this.props.genderRedux.length > 0
            ? this.props.genderRedux[0].keyMap
            : "",
      });
    }
    if (prevProps.positionRedux !== this.props.positionRedux) {
      this.setState({
        positions: this.props.positionRedux,
        position:
          this.props.positionRedux && this.props.positionRedux.length > 0
            ? this.props.positionRedux[0].keyMap
            : "",
      });
    }
    if (prevProps.roleRedux !== this.props.roleRedux) {
      this.setState({
        roles: this.props.roleRedux,
        role:
          this.props.roleRedux && this.props.roleRedux.length > 0
            ? this.props.roleRedux[0].keyMap
            : "",
      });
    }
  }

  handleShowPassword = () => {
    this.setState({
      isShowPassword: !this.state.isShowPassword,
    });
  };

  handleInputChange = (e, id) => {
    const copyState = { ...this.state };

    copyState[id] = e.target.value;

    this.setState({
      ...copyState,
    });
  };

  handleChangeImage = async (e) => {
    let uploadImg = e.target.files[0];
    if (uploadImg) {
      let base64 = await CommonUtils.getBase64(uploadImg);
      let imgURL = URL.createObjectURL(uploadImg);
      this.setState({
        previewImg: imgURL,
        avatar: base64,
      });
    }
  };

  checkValidUser = () => {
    let fields = [
      "firstName",
      "lastName",
      "email",
      "address",
      "phone",
      "password",
    ];
    for (let i = 0; i < fields.length; i++) {
      if (!this.state[fields[i]]) {
        alert("Missing field " + fields[i]);
        return false;
      }
    }
    return true;
  };

  handleSaveUser = async () => {
    let isValid = this.checkValidUser();
    let blackList = [
      "isShowPassword",
      "isOpen",
      "genders",
      "positions",
      "roles",
    ];
    if (isValid) {
      let data = {
        ...this.state,
      };
      for (let i = 0; i < blackList.length; i++) {
        delete data[blackList[i]];
      }
      await this.props.createNewUser(data);
      await this.props.fetchAllUsersStart();
    }
  };

  openPreviewImg = () => {
    this.setState({
      isOpen: true,
    });
  };

  handleEditUserFromParent = (user) => {
    let imageBase64 = '';
    if(user.image) {
      imageBase64 = new Buffer(user.image, 'base64').toString('binary')
    }
    this.setState({
      id: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      address: user.address,
      phone: user.phone,
      gender: user.gender,
      position: user.positionId,
      role: user.roleId,
      previewImg: imageBase64,
      avatar: '',
    })
  }

  render() {
    let {
      firstName,
      lastName,
      email,
      password,
      address,
      phone,
      gender,
      position,
      role,
      previewImg,
      avatar,
    } = this.state;

    let data = {
      id: this.state.id,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      address: this.state.address,
      phone: this.state.phone,
      gender: this.state.gender,
      position: this.state.position,
      role: this.state.role,
      avatar: this.state.avatar
    }

    let genderArr = this.state.genders;
    let positionArr = this.state.positions;
    let roleArr = this.state.roles;
    let language = this.props.language;

    return (
      <div className="user-redux-container">
        <div className="title">
          <FormattedMessage id="system.user-redux.title" />
        </div>

        <div className="user-redux-body">
          <div className="container">
            <div className="row">
              <div className="form-group col-6">
                <label>
                  <FormattedMessage id="system.user-manage.first-name" />
                </label>
                <input
                  type="text"
                  value={firstName}
                  className="form-control"
                  onChange={(e) => {
                    this.handleInputChange(e, "firstName");
                  }}
                />
              </div>
              <div className="form-group col-6">
                <label>
                  <FormattedMessage id="system.user-manage.last-name" />
                </label>
                <input
                  type="text"
                  value={lastName}
                  className="form-control"
                  onChange={(e) => {
                    this.handleInputChange(e, "lastName");
                  }}
                />
              </div>
              <div className="form-group col-6">
                <label>
                  <FormattedMessage id="system.user-manage.email" />
                </label>
                <input
                  type="email"
                  className="form-control"
                  onChange={(e) => {
                    this.handleInputChange(e, "email");
                  }}
                  value={email}
                />
              </div>
              <div className="form-group col-6">
                <label>
                  <FormattedMessage id="system.user-manage.address" />
                </label>
                <input
                  type="text"
                  className="form-control"
                  onChange={(e) => {
                    this.handleInputChange(e, "address");
                  }}
                  value={address}
                />
              </div>
              <div className="form-group col-6">
                <label>
                  <FormattedMessage id="system.user-manage.mobile" />
                </label>
                <input
                  type="text"
                  className="form-control"
                  onChange={(e) => {
                    this.handleInputChange(e, "phone");
                  }}
                  value={phone}
                />
              </div>
              <div className="form-group col-6">
                <label>
                  <FormattedMessage id="system.user-manage.password" />
                </label>
                <div className="password-field">
                  <input
                    type={this.state.isShowPassword ? "text" : "password"}
                    className="form-control"
                    onChange={(e) => {
                      this.handleInputChange(e, "password");
                    }}
                    value={password}
                  />
                  <span onClick={this.handleShowPassword}>
                    <i
                      className={
                        this.state.isShowPassword
                          ? "far fa-eye-slash"
                          : "far fa-eye"
                      }
                    ></i>
                  </span>
                </div>
              </div>
              <div className="form-group col-3">
                <label>
                  <FormattedMessage id="system.user-manage.gender" />
                </label>
                <select
                  name="gender"
                  id="gender"
                  className="form-control"
                  value={gender}
                  onChange={(e) => {
                    this.handleInputChange(e, "gender");
                  }}
                >
                  {genderArr &&
                    genderArr.length > 0 &&
                    genderArr.map((gender, index) => (
                      <option key={index} value={gender.keyMap}>
                        {language === languages.VIE
                          ? gender.valueVI
                          : gender.valueEN}
                      </option>
                    ))}
                </select>
              </div>
              <div className="form-group col-3">
                <label>
                  <FormattedMessage id="system.user-manage.role" />
                </label>
                <select
                  name="role"
                  id="role"
                  className="form-control"
                  value={role}
                  onChange={(e) => {
                    this.handleInputChange(e, "role");
                  }}
                >
                  {roleArr &&
                    roleArr.length > 0 &&
                    roleArr.map((role, index) => (
                      <option key={index} value={role.keyMap}>
                        {language === languages.VIE
                          ? role.valueVI
                          : role.valueEN}
                      </option>
                    ))}
                </select>
              </div>
              <div className="form-group col-3">
                <label>
                  <FormattedMessage id="system.user-manage.position" />
                </label>
                <select
                  name="position"
                  id="position"
                  className="form-control"
                  value={position}
                  onChange={(e) => {
                    this.handleInputChange(e, "position");
                  }}
                >
                  {positionArr &&
                    positionArr.length > 0 &&
                    positionArr.map((position, index) => (
                      <option key={index} value={position.keyMap}>
                        {language === languages.VIE
                          ? position.valueVI
                          : position.valueEN}
                      </option>
                    ))}
                </select>
              </div>
              <div className="form-group col-3">
                <label className="w-100">
                  <FormattedMessage id="system.user-manage.image" />
                </label>
                <div className="upload-img">
                  <input
                    id="img"
                    type="file"
                    hidden
                    onChange={this.handleChangeImage}
                  />
                  <label htmlFor="img" className="label-upload">
                    <i className="fas fa-upload"></i>
                  </label>
                  {this.state.previewImg && (
                    <div
                      className="preview-img"
                      style={{
                        backgroundImage: `url(${this.state.previewImg})`,
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                      }}
                      onClick={this.openPreviewImg}
                    ></div>
                  )}
                </div>
              </div>
              <div className="container text-center">
                <button
                  className="btn btn-primary col-3"
                  onClick={this.handleSaveUser}
                >
                  <FormattedMessage id="system.user-manage.save" />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 mt-5">
          <TableManageUser 
            handleEditUserFromParent={this.handleEditUserFromParent}
            action={this.state.action}
            data={data}
          />
        </div>
        <MdEditor
          style={{ height: "500px" }}
          renderHTML={(text) => mdParser.render(text)}
          onChange={handleEditorChange}
        />
        {this.state.isOpen && (
          <Lightbox
            mainSrc={this.state.previewImg}
            onCloseRequest={() => this.setState({ isOpen: false })}
          />
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    language: state.app.language,
    genderRedux: state.admin.genders,
    roleRedux: state.admin.roles,
    positionRedux: state.admin.positions,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getGenderStart: () => dispatch(actions.fetchGenderStart()),
    getPositionStart: () => dispatch(actions.fetchPositionStart()),
    getRoleStart: () => dispatch(actions.fetchRoleStart()),
    createNewUser: (data) => dispatch(actions.createNewUser(data)),
    fetchAllUsersStart: () => dispatch(actions.fetchAllUsersStart()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserRedux);
