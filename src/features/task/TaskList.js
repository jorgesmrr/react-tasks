import React from 'react';
import Task from './Task';
import { connect } from 'react-redux';

class TaskList extends React.Component {
    render() {
        const tasks = Object.values(this.props.tasks).map(t => <Task key={t.id} id={t.id} />)

        return <ul>{tasks}</ul>
    }
}

const mapStateToProps = (state) => ({ tasks: state.task.all });

export default connect(mapStateToProps)(TaskList);