import React from 'react';
import { getTaskById, deleteTask, toggleTask } from './taskSlice';
import { connect } from 'react-redux';

class Task extends React.Component {
    deleteTask(ev) {
        ev.stopPropagation();
        this.props.deleteTask(this.props.task.id)
    }

    render() {
        return <li className="bg-neutral-2 rounded p-2 my-2 flex items-center">
            <i className={`${this.props.task.done ? 'fas' : 'far'} fa-check-circle mr-2 cursor-pointer`}
                onClick={() => this.props.toggleTask(this.props.id)} />
            <span>
                {this.props.task.text}
            </span>
            <i className="fas fa-times ml-auto px-2"
                onClick={ev => this.deleteTask(ev)} />
        </li >
    }
}

const mapStateToProps = (state, ownProps) => ({ task: getTaskById(state.tasks, ownProps.id) });
const mapDispatchToProps = { deleteTask, toggleTask };

export default connect(mapStateToProps, mapDispatchToProps)(Task);