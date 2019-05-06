import React, { Component } from "react";

export class CatInput extends React.Component {
    state = {
        categoryInput: ""
    };

    handleOnChange = e => {
        this.setState ({
            [e.target.name] : e.target.value
        });
    }
    submitForm = e => {
        e.preventDefault();
        const categoryInput = this.state.categoryInput;
        const { value } = e.target;
        this.props.onSubmit(categoryInput);
        this.setState ({
            categoryInput: value
        });
    };

    render() {
        return(
            <div>
                <form className="input-group mb-3" onSubmit={this.submitForm}>
                    <input className="form-control" type="text" onChange={this.state.handleOnChange} value={this.state.submitForm} placeholder="Create a cat-egory"/>
                    <div className="input-group-append">
                        <button className="btn btn-dark" type="submit">Save</button>
                    </div>
                </form>
            </div>
        )
    }
}