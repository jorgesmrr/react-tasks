import React from "react";
import { getListById, openList } from "./listSlice";
import { getTasksByList } from "./../task/taskSlice";
import { connect } from "react-redux";
import ListItem from "../common/ListItem";

class List extends React.Component {
    onOptionsClick(ev) {
        ev.stopPropagation();
        this.props.onOptionsClick(this.props.list.id);
    }

    render() {
        return this.props.list ? (
            <ListItem
                icon="fas fa-list"
                title={this.props.list.name}
                count={this.props.tasksCount}
                selected={this.props.isActive}
                dataTestId="list"
                optionsDataTestId="listEdit"
                onClick={() => this.props.openList(this.props.list.id)}
                onOptionsClick={() => this.props.onOptionsClick()}
            />
        ) : null;
    }
}

const mapStateToProps = (state, ownProps) => ({
    list: getListById(state.lists, ownProps.id),
    isActive: ownProps.id === state.lists.activeListId,
    tasksCount: getTasksByList(state.tasks, ownProps.id).filter((t) => !t.done)
        .length,
});
const mapDispatchToProps = { openList };

export default connect(mapStateToProps, mapDispatchToProps)(List);
