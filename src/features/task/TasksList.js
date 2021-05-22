import React from "react";
import Task from "./Task";
import { connect } from "react-redux";
import { getDoneTasksByList, getUndoneTasksByList } from "./taskSlice";
import Modal from "@bit/jorgemoreira.headless-react.surface.modal";
import TaskCreator from "./TaskCreator";
import TaskManager from "./TaskManager";
import ListItem from "../common/ListItem";
import ModalCard from "../common/ModalCard";
import { getListById } from "../list/listSlice";

class TasksList extends React.Component {
    state = { edittedTaskId: null, showDone: false };

    editTask(id) {
        this.setState({ edittedTaskId: id });
    }

    cancelTaskEdition() {
        this.setState({ edittedTaskId: null });
    }

    renderTaskManager() {
        return this.state.edittedTaskId ? (
            <TaskManager
                id={this.state.edittedTaskId}
                onSuccess={() => this.cancelTaskEdition()}
                onCancel={() => this.cancelTaskEdition()}
            />
        ) : null;
    }

    render() {
        const undoneTasks = this.props.undoneTasks.map((t) => (
            <Task
                key={t.id}
                id={t.id}
                onOptionsClick={() => this.editTask(t.id)}
            />
        ));

        const doneTasks = this.state.showDone
            ? this.props.doneTasks.map((t) => (
                  <Task
                      key={t.id}
                      id={t.id}
                      onOptionsClick={() => this.editTask(t.id)}
                  />
              ))
            : null;

        const doneToggle = this.props.doneTasks.length ? (
            <ListItem
                icon={`fas ${
                    this.state.showDone ? "fa-chevron-down" : "fa-chevron-right"
                }`}
                title="Show completed"
                primary
                onClick={() =>
                    this.setState({ showDone: !this.state.showDone })
                }
            />
        ) : null;

        return (
            <div>
                <h1 className="hidden mt-0 mb-6 text-white lg:block">
                    {this.props.list.name}
                </h1>

                <ul>
                    <TaskCreator />

                    {undoneTasks}

                    {doneToggle}

                    {doneTasks}
                </ul>

                <Modal
                    show={this.state.edittedTaskId}
                    onDismiss={() => this.cancelTaskEdition()}
                >
                    <ModalCard
                        title="Edit task"
                        onDismiss={() => this.cancelTaskEdition()}
                    >
                        {this.renderTaskManager()}
                    </ModalCard>
                </Modal>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => ({
    list: getListById(state.lists, ownProps.listId),
    doneTasks: getDoneTasksByList(state.tasks, ownProps.listId),
    undoneTasks: getUndoneTasksByList(state.tasks, ownProps.listId),
});

export default connect(mapStateToProps)(TasksList);
