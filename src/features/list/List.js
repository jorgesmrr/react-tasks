import React from 'react';
import { getListById, openList } from './listSlice';
import { getTasksByList } from './../task/taskSlice';
import { connect } from 'react-redux';

class List extends React.Component {
    onOptionsClick(ev) {
        ev.stopPropagation();
        this.props.onOptionsClick(this.props.list.id);
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
        return this.props.list
            ? (
                <li className={`flex items-center hover:bg-neutral-1 rounded p-2 mb-2 cursor-pointer ${this.props.isActive ? 'bg-primary-1' : ''}`}
                    onClick={() => this.props.openList(this.props.list.id)}
                    data-test="list">
                    <i className="fas fa-list mr-2" />

                    <span>
                        {this.props.list.name}
                    </span>

                    <span className="ml-auto" />

                    {this.renderBadgeCount()}
                    <i className="fas fa-ellipsis-v hover:text-primary-3 rounded ml-2"
                        data-test="listEdit"
                        onClick={ev => this.onOptionsClick(ev)} />
                </li>
            )
            : null;
    }
}

const mapStateToProps = (state, ownProps) => ({
    list: getListById(state.lists, ownProps.id),
    isActive: ownProps.id === state.lists.activeListId,
    tasksCount: getTasksByList(state.tasks, ownProps.id).filter(t => !t.done).length
});
const mapDispatchToProps = { openList };

export default connect(mapStateToProps, mapDispatchToProps)(List);