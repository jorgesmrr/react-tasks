import React from 'react';
import { getTaskById, editTask, toggleTask } from './taskSlice';
import { connect } from 'react-redux';

class Task extends React.Component {
    editTask() {
        this.props.editTask(this.props.task.id)
    }

    render() {
        return <li className="bg-neutral-2 rounded p-2 my-2 flex items-center">
            <i className={`${this.props.task.done ? 'fas' : 'far'} fa-check-circle mr-2 cursor-pointer`}
                onClick={() => this.props.toggleTask(this.props.id)} />

            <span>
                {this.props.task.text}
            </span>

            <span className="ml-auto" />

            <i className="fas fa-ellipsis-v px-2"
                onClick={() => this.editTask()} />
        </li >
    }
}

const mapStateToProps = (state, ownProps) => ({ task: getTaskById(state.tasks, ownProps.id) });
const mapDispatchToProps = { editTask, toggleTask };

export default connect(mapStateToProps, mapDispatchToProps)(Task);