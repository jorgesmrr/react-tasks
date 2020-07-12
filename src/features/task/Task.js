import React from 'react';
import { getTaskById } from './taskSlice';
import { connect } from 'react-redux';

class Task extends React.Component {
    render() {
        return <li className="bg-neutral-2 rounded p-2 my-2">{this.props.task.text}</li>
    }
}

const mapStateToProps = (state, ownProps) => ({ task: getTaskById(state.tasks, ownProps.id) });

export default connect(mapStateToProps)(Task);