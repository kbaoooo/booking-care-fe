import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import "./TableManageUser.scss";
import * as actions from "../../../store/actions";

class TableManageUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
  }

  componentDidMount = async () => {
    this.props.fetchAllUsersStart();
  };

  componentDidUpdate = (prevProps, prevState, snapshot) => {
    if (prevProps.usersRedux !== this.props.usersRedux) {
      this.setState({
        users: this.props.usersRedux,
      });
    }
  };

  handleDeleteUser = async (user) => {
    await this.props.deleteUser(user.id);
    await this.props.fetchAllUsersStart();
  };

  handleEditUser = async (user) => {
    this.props.handleEditUserFromParent(user);
  };

  handleSaveEditUser = async () => {
    const {data} = this.props;
    await this.props.editUser(data.id, data);
    await this.props.fetchAllUsersStart();
  }

  render() {
    return (
      <div>
        <table className="table mt-3" style={{ width: "100%" }}>
          <thead>
            <tr>
              <th scope="col">
                <FormattedMessage id="system.user-manage.user-id" />
              </th>
              <th scope="col">
                <FormattedMessage id="system.user-manage.first-name" />
              </th>
              <th scope="col">
                <FormattedMessage id="system.user-manage.last-name" />
              </th>
              <th scope="col">
                <FormattedMessage id="system.user-manage.email" />
              </th>
              <th scope="col">
                <FormattedMessage id="system.user-manage.address" />
              </th>
              <th scope="col">
                <FormattedMessage id="system.user-manage.mobile" />
              </th>
              <th scope="col">
                <FormattedMessage id="system.user-manage.role" />
              </th>
              <th scope="col">
                <FormattedMessage id="system.user-manage.gender" />
              </th>
              <th scope="col">
                <FormattedMessage id="system.user-manage.actions" />
              </th>
            </tr>
          </thead>
          <tbody>
            {this.state.users &&
              this.state.users.length > 0 &&
              this.state.users.map((users, index) => {
                return (
                  <tr key={index}>
                    <td>{users.id}</td>
                    <td>{users.firstName}</td>
                    <td>{users.lastName}</td>
                    <td>{users.email}</td>
                    <td>{users.address}</td>
                    <td>{users.phone}</td>
                    <td>{users.roleId}</td>
                    <td>{users.gender}</td>
                    <td>
                      <button
                        className="btn edit-user"
                        onClick={() => this.handleEditUser(users)}
                      >
                        <i className="fas fa-pencil-alt"></i>
                      </button>
                      <button
                        className="btn delete-user"
                        onClick={() => this.handleDeleteUser(users)}
                      >
                        <i className="fas fa-trash"></i>
                      </button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
        <div className="container text-center">
          <button className="btn save-edit" onClick={this.handleSaveEditUser}>
            <FormattedMessage id="system.user-manage.save" />
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    usersRedux: state.admin.users,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllUsersStart: () => dispatch(actions.fetchAllUsersStart()),
    deleteUser: (id) => dispatch(actions.deleteUser(id)),
    editUser: (id, data) => dispatch(actions.editUser(id, data))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TableManageUser);
