import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import "./ModalUser.scss";

class ModalUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      address: "",
      phone: "",
      roleId: "1",
      gender: "1",
      isShowPassword: false,
    };

    this.toggle = this.toggle.bind(this);
  }

  componentDidMount() {}

  toggle() {
    this.props.toggleUserModal();
  }

  handleFirstNameChange = (e) => {
    this.setState({
      firstName: e.target.value,
    });
  };

  handleLastNameChange = (e) => {
    this.setState({
      lastName: e.target.value,
    });
  };

  handleEmailChange = (e) => {
    this.setState({
      email: e.target.value,
    });
  };

  handlePasswordChange = (e) => {
    this.setState({
      password: e.target.value,
    });
  };

  handleShowPassword = () => {
    this.setState({
      isShowPassword: !this.state.isShowPassword,
    });
  };

  handleAddressChange = (e) => {
    this.setState({
      address: e.target.value,
    });
  };

  handlePhoneChange = (e) => {
    this.setState({
      phone: e.target.value,
    });
  };

  handleRoleIdChange = (e) => {
    this.setState({
      roleId: e.target.value,
    });
  };

  handleGenderChange = (e) => {
    this.setState({
      gender: e.target.value,
    });
  };

  checkValidUser = () => {
    let fields = ['firstName', 'lastName', 'email', 'address', 'phone', 'password', 'roleId', 'gender']
    for(let i = 0; i < fields.length; i++) {
      if(!this.state[fields[i]]) {
        alert('Missing field ' + fields[i]);
        return false
      }
    }
    return true;
  };

  handleCreateUser = () => {
    let isValid = this.checkValidUser();
    let blackList = ['isShowPassword']
    if(isValid) {
      let data = {
        ...this.state,
      }
      for(let i = 0; i < blackList.length; i++) {
        delete data[blackList[i]]
      }
      this.props.toggleUserModal();
      this.props.getDataFromModal(data);
    }
  };

  render() {
    return (
      <div>
        <Button color="danger" onClick={this.toggle}>
          {this.props.buttonLabel}
        </Button>
        <Modal
          isOpen={this.props.showModal}
          toggle={this.toggle}
          className={this.props.className}
        >
          <ModalHeader toggle={this.toggle}>Create New User</ModalHeader>
          <ModalBody>
            <div className="row">
              <div className="form-group col-6">
                <label>First name</label>
                <input
                  type="text"
                  value={this.state.firstName}
                  className="form-control"
                  onChange={this.handleFirstNameChange}
                />
              </div>
              <div className="form-group col-6">
                <label>Last name</label>
                <input
                  type="text"
                  className="form-control"
                  onChange={this.handleLastNameChange}
                  value={this.state.handleLastNameChange}
                />
              </div>
              <div className="form-group col-12">
                <label>Email</label>
                <input
                  type="email"
                  className="form-control"
                  onChange={this.handleEmailChange}
                  value={this.state.email}
                />
              </div>
              <div className="form-group col-12">
                <label>Password</label>
                <div className="password-field">
                  <input
                    type={this.state.isShowPassword ? 'text' : 'password'}
                    className="form-control"
                    onChange={this.handlePasswordChange}
                    value={this.state.password}
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
              <div className="form-group col-12">
                <label>Address</label>
                <input
                  type="text"
                  className="form-control"
                  onChange={this.handleAddressChange}
                  value={this.state.address}
                />
              </div>
              <div className="form-group col-12">
                <label>Phone</label>
                <input
                  type="text"
                  className="form-control"
                  onChange={this.handlePhoneChange}
                  value={this.state.phone}
                />
              </div>
              <div className="form-group col-6">
                <label>Role ID</label>
                <select
                  type="text"
                  className="form-control"
                  onChange={this.handleRoleIdChange}
                  value={this.state.roleId}
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
              </div>
              <div className="form-group col-6">
                <label>Gender</label>
                <select
                  name="gender"
                  id="gender"
                  className="form-control"
                  onChange={this.handleGenderChange}
                  value={this.state.gender}
                >
                  <option value="1">Male</option>
                  <option value="0">Female</option>
                </select>
              </div>
            </div>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.handleCreateUser}>
              Create
            </Button>{" "}
            <Button color="secondary" onClick={this.toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalUser);
