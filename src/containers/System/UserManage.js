import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import { getAllUsers, createNewUser, getUserById, deleteUser, editUser } from "../../services/userService";
import ModalUser from "./ModalUser";
import ModalDelete from "./ModalDelete";
import ModalEdit from "./ModalEdit"
import Header from "../Header/Header";

class UserManage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      user: {},
      showModalUser: false,
      showModalDelete: false,
      showModalEdit: false,
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
      showModalUser: true,
    });
  };

  toggleUserModal = () => {
    this.setState({
      showModalUser: !this.state.showModalUser,
    });
  };

  handleDelete = async (id) => {
    let response = await getUserById(id)
    let user = response.data
    this.setState({
      user,
      showModalDelete: true,
    });
  };

  confirmDeleteUser = async (id) => {
    let resDelete = await deleteUser(id);
    if(resDelete && resDelete.errCode === 0) {
      alert(resDelete.message);
      let { users } = await getAllUsers();
        this.setState({
          users,
          user: {}
      });
    } else {
      alert(resDelete.message)
    }
  }

  toggleModalDelete = () => {
    this.setState({
      showModalDelete: !this.state.showModalDelete,
    });
  };

  getDataFromModal = async (data) => {
    try {
      let res = await createNewUser(data);
      if (res && res.errCode !== 0) {
        alert(res.message);
      } else {
        alert(res.message);
        let { users } = await getAllUsers();
        this.setState({
          users,
        });
      }
    } catch (err) {
      console.error(err);
    }
  };

  toggleModalEdit = () => {
    this.setState({
      showModalEdit: !this.state.showModalEdit,
    });
  };

  handleEdit = async (id) => {
    let response = await getUserById(id)
    let user = response.data
    this.setState({
      user,
      showModalEdit: true,
    });
  }

  getDataFromModalEdit = async (id, data) => {
    try {
      let response = await editUser(id, data)
      if(response && response.errCode === 0) {
        alert(response.message)
        let { users } = await getAllUsers();
        this.setState({
          users,
        });
      } else {
        alert(response.message)
      }
    } catch (error) {
      console.error(error);
    }
  }

  render() {
    let users = this.state.users;
    return (
      <div
        className="container"
        style={{ margin: 0, padding: 0, maxWidth: "100%" }}
      >
        <Header/>
        <div className="content" style={{ margin: 0, width: "100%" }}>
          <button
            className="btn btn-primary mt-3"
            onClick={this.handleShowModal}
          >
            Add new user
          </button>
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
              {users.map((user, index) => {
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
                      <button 
                        className="btn btn-primary"
                        onClick={() => this.handleEdit(user.id)}
                      >
                          Edit
                      </button>
                      <button
                        className="btn btn-danger"
                        onClick={() => this.handleDelete(user.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <ModalUser
            getDataFromModal={this.getDataFromModal}
            showModalUser={this.state.showModalUser}
            toggleUserModal={this.toggleUserModal}
          />
          <ModalDelete
            data={this.state.user}
            showModalDelete={this.state.showModalDelete}
            toggleModalDelete={this.toggleModalDelete}
            confirmDeleteUser={this.confirmDeleteUser}
          />
          <ModalEdit 
            data={this.state.user}
            toggleModalEdit={this.toggleModalEdit}
            showModalEdit={this.state.showModalEdit}
            getDataFromModalEdit={this.getDataFromModalEdit}
          />
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
