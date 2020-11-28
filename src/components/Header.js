import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";

class Header extends Component {
  state = {
    show: false,
  };

  handleAddOption = (e) => {
    e.preventDefault();
    const item = e.target.elements.itemfield.value.trim();
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
        <div class="row">
          <div class="col">
            <div id="main-logo">LOGO</div>
          </div>
          <div class="col">
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
            <form className="form-inline" onSubmit={this.handleAddOption}>
              <input
                type="text"
                name="itemfield"
                defaultValue=""
                placeholder="Attend Meeting with Jack"
                className="flex-fill mr-2 form-control"
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
