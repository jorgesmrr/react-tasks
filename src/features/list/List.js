import React from 'react';
import { editList, getListById, openList } from './listSlice';
import { getTasksByList } from './../task/taskSlice';
import { connect } from 'react-redux';

class List extends React.Component {
    editList(ev) {
        ev.stopPropagation();
        this.props.editList(this.props.list.id)
    }

    renderBadgeCount() {
        return this.props.tasksCount > 0
            ? (
                <div className="bg-neutral-2 text-neutral-4 rounded px-2">
                    {this.props.tasksCount}
                </div>
            )
            : null;
    }

    render() {
        return (
            <li className="p-2 my-2 flex items-center"
                onClick={() => this.props.openList(this.props.list.id)}>
                <i className="fas fa-list mr-2 cursor-pointer" />

                <span className="mr-auto">
                    {this.props.list.name}
                </span>

                <span className="ml-auto" />

                {this.renderBadgeCount()}
                <i className="fas fa-ellipsis-v px-2"
                    onClick={ev => this.editList(ev)} />
            </li>
        )
    }
}

const mapStateToProps = (state, ownProps) => ({
    list: getListById(state.lists, ownProps.id),
    tasksCount: getTasksByList(state.tasks, ownProps.id).filter(t => !t.done).length
});
const mapDispatchToProps = { editList, openList };

export default connect(mapStateToProps, mapDispatchToProps)(List);