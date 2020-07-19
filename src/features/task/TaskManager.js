import React from 'react';
import { connect } from 'react-redux';
import { cancelTaskEdit, deleteTask, getEdittedTask, updateTask } from './taskSlice';
import TextField from '../common/TextField';

class TaskManager extends React.Component {
    constructor(props) {
        super(props);
        this.state = { text: this.props.task.text };
    }

    updateText(text) {
        this.setState({ text })
    }

    delete() {
        this.props.deleteTask(this.props.task.id)
    }

    submit() {
        this.props.updateTask(this.state.text);
    }

    render() {
        return this.props.task
            ? (
                <div>
                    <div className="card-block">
                        <TextField
                            label="Description"
                            value={this.state.text}
                            onChange={text => this.updateText(text)} />
                    </div>
                    <div className="card-block flex">
                        <button className="btn btn-danger" onClick={() => this.delete()}>
                            Delete
                        </button>

                        <span className="ml-auto" />

                        <button className="btn mr-2" onClick={() => this.props.cancelTaskEdit()}>
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

const mapStateToProps = state => ({ task: getEdittedTask(state.tasks) });
const mapDispatchToProps = { cancelTaskEdit, deleteTask, updateTask };

export default connect(mapStateToProps, mapDispatchToProps)(TaskManager);