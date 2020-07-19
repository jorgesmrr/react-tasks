import React from 'react';
import Task from './Task';
import { connect } from 'react-redux';
import { getTasksByList } from './taskSlice';
import Modal from '../common/Modal';
import NewTask from './NewTask';
import TaskManager from './TaskManager';
import { PrimaryListItem } from '../common/PrimaryListItem';

class TasksList extends React.Component {
    state = { createTask: false, edittedTaskId: null };

    createTask() {
        this.setState({ createTask: true });
    }

    cancelTaskCreation() {
        this.setState({ createTask: false });
    }

    editTask(id) {
        this.setState({ edittedTaskId: id });
    }

    cancelTaskEdition() {
        this.setState({ edittedTaskId: null });
    }

    renderTaskCreator() {
        return this.state.createTask
            ? <NewTask
                onSuccess={() => this.cancelTaskCreation()}
                onCancel={() => this.cancelTaskCreation()} />
            : null;
    }

    renderTaskManager() {
        return this.state.edittedTaskId
            ? <TaskManager
                id={this.state.edittedTaskId}
                onSuccess={() => this.cancelTaskEdition()}
                onCancel={() => this.cancelTaskEdition()} />
            : null;
    }

    render() {
        const tasks = Object.keys(this.props.tasks).map(taskId => (
            <Task
                key={taskId}
                id={taskId}
                onOptionsClick={() => this.editTask(taskId)} />
        ))

        return (
            <div>
                <ul>
                    {tasks}

                    <PrimaryListItem
                        icon="fas fa-plus"
                        title="Create new task..."
                        onClick={() => this.createTask()} />
                </ul>

                <Modal
                    title="New task"
                    show={this.state.createTask}
                    onDismiss={() => this.cancelTaskCreation()}>
                    {this.renderTaskCreator()}
                </Modal>
                <Modal
                    title="Edit task"
                    show={this.state.edittedTaskId}
                    onDismiss={() => this.cancelTaskEdition()}>
                    {this.renderTaskManager()}
                </Modal>
            </div>)
    }
}

const mapStateToProps = (state, ownProps) => ({ tasks: getTasksByList(state.tasks, ownProps.listId) });

export default connect(mapStateToProps)(TasksList);