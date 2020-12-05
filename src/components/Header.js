import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";
import {connect} from 'react-redux'

import { addNote } from '../actions/notes';

class Header extends Component {
  state = {
    showModal: false,
  };


  handleAddOption = (e) => {
    e.preventDefault();
    const item = {
      title: e.target.elements.itemfield.value.trim(),
      tags: e.target.elements.itemTags.value.trim().split(","),
    };

   this.props.dispatch(addNote(item));

  };

  handleCloseModal = () => {
    this.setState(() => ({ showModal: false }));
  };
  handleShowModal = () => {
    this.setState(() => ({ showModal: true }));
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
              onClick={this.handleShowModal}
            >
              Add New Item
            </button>
          </div>
        </div>

        <Modal show={this.state.showModal} onHide={this.handleCloseModal}>
          <Modal.Header closeButton>
            <Modal.Title>Add a New Item</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form onSubmit={this.handleAddOption}>
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
                onClick={this.handleCloseModal}
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

export default connect()(Header);
