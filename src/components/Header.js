import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";
import { v1 as uuid } from "uuid";
import dayjs from "dayjs";

class Header extends Component {
  state = {
    show: false,
  };


  handleAddOption = (e) => {
    e.preventDefault();
    const item = {
      id: uuid(),
      title: e.target.elements.itemfield.value.trim(),
      completed: false,
      tags: e.target.elements.itemTags.value.trim().split(","),
      lastModified: dayjs().toString(),
    };

    const error = this.props.handleAddItem(item);

  };

  handleClose = () => {
    this.setState((prevState) => ({ show: false }));
  };
  handleShow = () => {
    this.setState((prevState) => ({ show: true }));
  };

  render() {
    return (
      <>
        <div className="row">
          <div className="col">
            <div id="main-logo">LOGO</div>
          </div>
          <div className="col">
            <button
              className="btn btn-secondary float-right"
              onClick={this.handleShow}
            >
              Add New Item
            </button>
          </div>
        </div>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add a New Item</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form  onSubmit={this.handleAddOption}>
              <input
                type="text"
                name="itemfield"
                defaultValue=""
                placeholder="Attend Meeting with Jack"
                className="form-control mb-3"
              />

            <input
                type="text"
                name="itemTags"
                defaultValue=""
                placeholder="work, meeting"
                className="form-control  mb-3"
            />

              <Button
                variant="primary"
                type="submit"
                onClick={this.handleClose}
              >
                Add Item
              </Button>
            </form>
          </Modal.Body>
        </Modal>
      </>
    );
  }
}
export default Header;
