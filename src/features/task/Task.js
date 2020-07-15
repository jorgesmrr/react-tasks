import React from 'react';
import { getTaskById, deleteTask } from './taskSlice';
import { connect } from 'react-redux';

class Task extends React.Component {
    deleteTask(ev) {
        ev.stopPropagation();
        this.props.deleteTask(this.props.task.id)
    }

    render() {
        return <li className="bg-neutral-2 rounded p-2 my-2 flex flex-items-center">
            {this.props.task.text}
            <i className="fas fa-times ml-auto p-2 bg-default-4"
                onClick={ev => this.deleteTask(ev)} />
        </li>
    }
}

const mapStateToProps = (state, ownProps) => ({ task: getTaskById(state.tasks, ownProps.id) });
const mapDispatchToProps = { deleteTask };

export default connect(mapStateToProps, mapDispatchToProps)(Task);