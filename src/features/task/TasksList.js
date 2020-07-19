import React from 'react';
import Task from './Task';
import { connect } from 'react-redux';
import { getDoneTasksByList, getUndoneTasksByList } from './taskSlice';
import Modal from '../common/Modal';
import NewTask from './TaskCreator';
import TaskManager from './TaskManager';
import PrimaryListItem from '../common/PrimaryListItem';

class TasksList extends React.Component {
    state = { createTask: false, edittedTaskId: null, showDone: false };

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
        const undoneTasks = this.props.undoneTasks.map(t => (
            <Task
                key={t.id}
                id={t.id}
                onOptionsClick={() => this.editTask(t.id)} />
        ))

        const doneTasks = this.state.showDone
            ? this.props.doneTasks.map(t => (
                <Task
                    key={t.id}
                    id={t.id}
                    onOptionsClick={() => this.editTask(t.id)} />
            ))
            : null;

        const doneToggle = this.props.doneTasks.length
            ? <PrimaryListItem
                icon={`fas ${this.state.showDone ? 'fa-chevron-down' : 'fa-chevron-right'}`}
                title="Show completed"
                onClick={() => this.setState({ showDone: !this.state.showDone })} />
            : null;

        return (
            <div>
                <ul>
                    <PrimaryListItem
                        icon="fas fa-plus"
                        title="Create new task..."
                        onClick={() => this.createTask()} />

                    {undoneTasks}

                    {doneToggle}

                    {doneTasks}
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

const mapStateToProps = (state, ownProps) => ({
    doneTasks: getDoneTasksByList(state.tasks, ownProps.listId),
    undoneTasks: getUndoneTasksByList(state.tasks, ownProps.listId)
});

export default connect(mapStateToProps)(TasksList);