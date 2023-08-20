import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import { getAllUsers, createNewUser } from "../../services/userService";
import ModalUser from "./ModalUser";

class UserManage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      showModal: false,
    };
  }

  async componentDidMount() {
    let { users } = await getAllUsers();
    this.setState({
      users,
    });
  }

  handleShowModal = () => {
    this.setState({
      showModal: true,
    });
  }

  toggleUserModal = () => {
    this.setState({
        showModal: !this.state.showModal
    })
  }

  getDataFromModal = async (data) => {
    try {
      let res = await createNewUser(data);
      if(res && res.errCode !== 0) {
        alert(res.message)
      } else {
        alert(res.message)
        let { users } = await getAllUsers();
        this.setState({
          users,
        });
      }
    } catch(err) {
      console.error(err);
    }
  }

  render() {
    let users = this.state.users;
    return (
      <div
        className="container"
        style={{ margin: 0, padding: 0, maxWidth: "100%" }}
      >
        <div className="content" style={{ margin: 0, width: "100%" }}>
          <button
            className="btn btn-primary mt-3"
            onClick={this.handleShowModal}
          >
            Add new user
          </button>
          <ModalUser getDataFromModal={this.getDataFromModal} showModal={this.state.showModal} toggleUserModal={this.toggleUserModal}/>
          <table className="talbe mt-3" style={{ width: "100%" }}>
            <thead>
              <tr>
                <th scope="col">Id</th>
                <th scope="col">First Name</th>
                <th scope="col">Last Name</th>
                <th scope="col">Email</th>
                <th scope="col">Address</th>
                <th scope="col">Phone</th>
                <th scope="col">Role</th>
                <th scope="col">Gender</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map(function (user, index) {
                let role = "Admin";
                if (user.roleId === "2") {
                  role = "Doctor";
                }
                if (user.roleId === "3") {
                  role = "Patient";
                }

                let gender;
                user.gender ? (gender = "Male") : (gender = "Female");
                return (
                  <tr key={user.id}>
                    <th scope="row">{index + 1}</th>
                    <td>{user.firstName}</td>
                    <td>{user.lastName}</td>
                    <td>{user.email}</td>
                    <td>{user.address}</td>
                    <td>{user.phone}</td>
                    <td>{role}</td>
                    <td>{gender}</td>
                    <td>
                      <button className="btn btn-primary">Edit</button>
                      <button className="btn btn-danger">Delete</button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(UserManage);
