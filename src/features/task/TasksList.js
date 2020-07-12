import React from 'react';
import Task from './Task';
import { connect } from 'react-redux';
import { getTasksByList } from './taskSlice';

class TasksList extends React.Component {
    render() {
        const tasks = Object.values(this.props.tasks).map(t => <Task key={t.id} id={t.id} />)

        return <ul>{tasks}</ul>
    }
}

const mapStateToProps = (state, ownProps) => ({ tasks: getTasksByList(state.tasks, ownProps.listId) });

export default connect(mapStateToProps)(TasksList);