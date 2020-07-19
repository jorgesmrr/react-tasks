import React from 'react';
import { getTaskById, toggleTask } from './taskSlice';
import { connect } from 'react-redux';

class Task extends React.Component {
    editTask() {
        this.props.editTask(this.props.task.id)
    }

    render() {
        return <li className="bg-neutral-2 rounded p-2 mb-2 flex items-center">
            <i className={`${this.props.task.done ? 'fas' : 'far'} fa-check-circle mr-2 cursor-pointer`}
                onClick={() => this.props.toggleTask(this.props.id)} />

            <span>
                {this.props.task.text}
            </span>

            <span className="ml-auto" />

            <i className="fas fa-ellipsis-v hover:text-primary-3 rounded cursor-pointer"
                onClick={() => this.props.onOptionsClick()} />
        </li >
    }
}

const mapStateToProps = (state, ownProps) => ({ task: getTaskById(state.tasks, ownProps.id) });
const mapDispatchToProps = { toggleTask };

export default connect(mapStateToProps, mapDispatchToProps)(Task);