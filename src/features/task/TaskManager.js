import React from "react";
import { connect } from "react-redux";
import { deleteTask, updateTask, getTaskById } from "./taskSlice";
import Field from "@bit/jorgemoreira.headless-react.input.field";
import TextField from "@bit/jorgemoreira.headless-react.input.text-field";

class TaskManager extends React.Component {
    state = { text: this.props.task.text };

    delete() {
        this.props.deleteTask(this.props.task.id);
        this.props.onSuccess();
    }

    submit() {
        this.props.updateTask({
            id: this.props.task.id,
            text: this.state.text,
        });
        this.props.onSuccess();
    }

    render() {
        return this.props.task ? (
            <div>
                <div className="card-block">
                    <Field label="Description">
                        <TextField
                            autoFocus
                            value={this.state.text}
                            onChange={(text) => this.setState({ text })}
                        />
                    </Field>
                </div>
                <div className="flex card-block">
                    <button
                        className="btn btn-danger"
                        data-test="taskDelete"
                        onClick={() => this.delete()}
                    >
                        Delete
                    </button>

                    <span className="ml-auto" />

                    <button
                        className="mr-2 btn"
                        onClick={() => this.props.onCancel()}
                    >
                        Cancel
                    </button>
                    <button
                        className="btn btn-primary"
                        onClick={() => this.submit()}
                    >
                        Save
                    </button>
                </div>
            </div>
        ) : null;
    }
}

const mapStateToProps = (state, ownProps) => ({
    task: getTaskById(state.tasks, ownProps.id),
});
const mapDispatchToProps = { deleteTask, updateTask };

export default connect(mapStateToProps, mapDispatchToProps)(TaskManager);
