import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

class ModalDelete extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.props.toggleModalDelete();
  }

  confirmDelete = (id) => {
    this.props.toggleModalDelete();
    this.props.confirmDeleteUser(id);
  }


  render() {
    let user = this.props.data

    return (
      <div>
        <Button color="danger" onClick={this.toggle}>
          {this.props.buttonLabel}
        </Button>
        <Modal
          isOpen={this.props.showModalDelete}
          toggle={this.toggle}
          className={this.props.className}
        >
          <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
          <ModalBody>
            Do you want to delete user: {user.firstName} {user.lastName}
          </ModalBody>
          <ModalFooter>
            <Button color="danger" onClick={() => {this.confirmDelete(user.id)}}>
              Delete
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

export default connect(mapStateToProps, mapDispatchToProps)(ModalDelete);
