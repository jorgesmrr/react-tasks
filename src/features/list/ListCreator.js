import React from "react";
import { add } from "./listSlice";
import { connect } from "react-redux";
import Field from "@bit/jorgemoreira.headless-react.input.field";
import TextField from "@bit/jorgemoreira.headless-react.input.text-field";

class NewList extends React.Component {
    state = { name: "" };

    submit() {
        if (!this.state.name.length) return;

        this.props.add(this.state.name);
        this.props.onSuccess();
    }

    render() {
        return (
            <div>
                <div className="card-block">
                    <Field label="Name">
                        <TextField
                            autoFocus
                            value={this.state.name}
                            data-test="newListName"
                            onChange={(name) => this.setState({ name })}
                            onEnter={() => this.submit()}
                        />
                    </Field>
                </div>
                <div className="text-right card-block">
                    <button
                        className="mr-2 btn"
                        onClick={() => this.props.onCancel()}
                    >
                        Cancel
                    </button>
                    <button
                        className="btn btn-primary"
                        data-test="newListSubmit"
                        onClick={() => this.submit()}
                    >
                        Save
                    </button>
                </div>
            </div>
        );
    }
}

const mapDisptachToProps = { add };

export default connect(null, mapDisptachToProps)(NewList);
