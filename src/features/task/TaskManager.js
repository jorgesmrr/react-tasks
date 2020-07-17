import React from 'react';
import { connect } from 'react-redux';
import { cancelTaskEdit, getEdittedTask, updateTask } from './taskSlice';

class TaskManager extends React.Component {
    constructor(props) {
        super(props);
        this.state = { text: this.props.task.text };
    }

    updateText(ev) {
        this.setState({ text: ev.target.value })
    }

    submit() {
        this.props.updateTask(this.state.text);
    }

    render() {
        return this.props.task
            ? (
                <div>
                    <div className="card-block">
                        <input className="mr-2" type="text" value={this.state.text} onChange={ev => this.updateText(ev)} />
                    </div>
                    <div className="card-block text-right">
                        <button className="btn" onClick={() => this.props.cancelTaskEdit()}>
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
const mapDispatchToProps = { cancelTaskEdit, updateTask };

export default connect(mapStateToProps, mapDispatchToProps)(TaskManager);