import React from "react";
import { add } from "./taskSlice";
import { connect } from "react-redux";
import Field from "@bit/jorgemoreira.headless-react.input.field";
import TextField from "@bit/jorgemoreira.headless-react.input.text-field";

class NewTask extends React.Component {
    state = { text: "" };

    submit() {
        if (!this.state.text.length) return;

        this.props.add({
            listId: this.props.activeListId,
            text: this.state.text,
        });
        this.props.onSuccess();
    }

    render() {
        return (
            <div>
                <div className="card-block">
                    <Field label="Description">
                        <TextField
                            autoFocus
                            label="Description"
                            value={this.state.text}
                            data-test="newTaskName"
                            onChange={(text) => this.setState({ text })}
                            onEnter={() => this.submit()}
                        />
                    </Field>
                </div>
                <div className="card-block text-right">
                    <button
                        className="btn mr-2"
                        onClick={() => this.props.onCancel()}
                    >
                        Cancel
                    </button>
                    <button
                        className="btn btn-primary"
                        data-test="newTaskSubmit"
                        onClick={() => this.submit()}
                    >
                        Save
                    </button>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = { add };
const mapStateToProps = (state) => ({ activeListId: state.lists.activeListId });

export default connect(mapStateToProps, mapDispatchToProps)(NewTask);
