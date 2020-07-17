import React from 'react';
import TasksList from '../task/TasksList';
import NewTask from '../task/NewTask';
import ListsList from '../list/ListsList';
import NewList from '../list/NewList';
import { connect } from 'react-redux';
import { cancelTaskEdit, getEdittedTask } from '../task/taskSlice';
import { cancelListEdit, getEdittedList } from '../list/listSlice';
import Modal from '../common/Modal';
import TaskManager from '../task/TaskManager';
import ListManager from '../list/ListManager';

class Home extends React.Component {
    renderTasks() {
        return this.props.activeListId
            ? (
                <div>
                    <NewTask />
                    <TasksList listId={this.props.activeListId} />
                </div>
            )
            : <p>Select a list</p>;
    }

    renderTaskManagger() {
        return this.props.edittedTask
            ? <TaskManager />
            : null;
    }

    renderListManager() {
        return this.props.edittedList
            ? <ListManager />
            : null;
    }

    render() {
        return (
            <div>
                <div className="flex">
                    <div className="mr-4">
                        <NewList />
                        <ListsList />
                    </div>
                    {this.renderTasks()}
                </div>
                <Modal
                    title="Edit task"
                    show={this.props.edittedTask}
                    onDismiss={() => this.props.editTask(null)}>
                    {this.renderTaskManagger()}
                </Modal>
                <Modal
                    title="Edit list"
                    show={this.props.edittedList}
                    onDismiss={() => this.props.editList(null)}>
                    {this.renderListManager()}
                </Modal>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    activeListId: state.lists.activeListId,
    edittedTask: getEdittedTask(state.tasks),
    edittedList: getEdittedList(state.lists),
});
const mapDispatchToProps = { cancelTaskEdit, cancelListEdit };

export default connect(mapStateToProps, mapDispatchToProps)(Home);