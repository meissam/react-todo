import React, { Component } from 'react'

class Form extends Component {

    handleAddOption = (e) => {
        e.preventDefault();
        const item = e.target.elements.itemfield.value.trim();
        const error = this.props.handleAddItem(item);
       
      }

    render() {
        return (
            <form className="form-inline" onSubmit={this.handleAddOption}>
                <input type="text" name="itemfield" defaultValue="" placeholder="Attend Meeting with Jack" className="flex-fill mr-2 form-control" />
                <button className="btn btn-primary" type="submit">
                        Add
                    </button>
            </form>
        )
    }
}

export default Form