import React from 'react';
import { getTaskById } from './taskSlice';
import { connect } from 'react-redux';

class Task extends React.Component {
    render() {
        return <li>{this.props.task.text}</li>
    }
}

const mapStateToProps = (state, ownProps) => ({ task: getTaskById(state.task, ownProps.id) });

export default connect(mapStateToProps)(Task);