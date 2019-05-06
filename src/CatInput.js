import React from "react";

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
                <div className="form-row">
                    <div className="col-xs-4">
                        <div className="input-group">
                            <input className="form-control mb-3" placeholder="Create a cat-egory" type="text" onChange={this.state.handleOnChange} value={this.state.submitForm}/>
                            <span className="input-group-btn">
                                <button className="btn btn-dark" type="submit">Save</button>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
