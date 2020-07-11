import React from 'react';
import { add } from './taskSlice';
import { connect } from 'react-redux';

class NewTask extends React.Component {
    constructor(props) {
        super(props);
        this.state = { text: '' };
    }

    updateText(ev) {
        this.setState({ text: ev.target.value })
    }

    addTask() {
        this.props.add(this.state.text);
        this.setState({ text: '' })
    }

    render() {
        return (
            <div className="flex">
                <input type="text" value={this.state.text} onChange={ev => this.updateText(ev)} />
                <button className="btn" onClick={() => this.addTask()}>
                    Add
                </button>
            </div>
        )
    }
}

const mapDisptachToProps = { add };

export default connect(null, mapDisptachToProps)(NewTask);