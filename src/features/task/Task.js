import React from "react";
import { getTaskById, toggleTask } from "./taskSlice";
import { connect } from "react-redux";
import ListItem from "../common/ListItem";

class Task extends React.Component {
    editTask() {
        this.props.editTask(this.props.task.id);
    }

    render() {
        return (
            <ListItem
                icon={`${this.props.task.done ? "fas" : "far"} fa-check-circle`}
                title={this.props.task.text}
                dataTest="task"
                optionsDataTest="taskEdit"
                onClick={() => this.props.toggleTask(this.props.id)}
                onOptionsClick={() => this.props.onOptionsClick()}
            />
        );
    }
}

const mapStateToProps = (state, ownProps) => ({
    task: getTaskById(state.tasks, ownProps.id),
});
const mapDispatchToProps = { toggleTask };

export default connect(mapStateToProps, mapDispatchToProps)(Task);
