import React from 'react';
import { connect } from 'react-redux';
import { deleteTask, updateTask, getTaskById } from './taskSlice';
import TextField from '../common/TextField';

class TaskManager extends React.Component {
    state = { text: this.props.task.text };

    delete() {
        this.props.deleteTask(this.props.task.id);
        this.props.onSuccess();
    }

    submit() {
        this.props.updateTask({ id: this.props.task.id, text: this.state.text });
        this.props.onSuccess();
    }

    render() {
        return this.props.task
            ? (
                <div>
                    <div className="card-block">
                        <TextField
                            label="Description"
                            value={this.state.text}
                            onChange={text => this.setState({ text })} />
                    </div>
                    <div className="card-block flex">
                        <button className="btn btn-danger" onClick={() => this.delete()}>
                            Delete
                        </button>

                        <span className="ml-auto" />

                        <button className="btn mr-2" onClick={() => this.props.onCancel()}>
                            Cancel
                        </button>
                        <button className="btn btn-primary" onClick={() => this.submit()}>
                            Save
                        </button>
                    </div>
                </div>
            )
            : null;
    }
}

const mapStateToProps = (state, ownProps) => ({ task: getTaskById(state.tasks, ownProps.id) });
const mapDispatchToProps = { deleteTask, updateTask };

export default connect(mapStateToProps, mapDispatchToProps)(TaskManager);