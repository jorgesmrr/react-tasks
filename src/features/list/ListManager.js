import React from 'react';
import { connect } from 'react-redux';
import { cancelListEdit, getEdittedList, updateList } from './listSlice';

class ListManager extends React.Component {
    constructor(props) {
        super(props);
        this.state = { text: this.props.list.name };
    }

    updateText(ev) {
        this.setState({ text: ev.target.value })
    }

    submit() {
        this.props.updateList(this.state.text);
    }

    render() {
        return this.props.list
            ? (
                <div>
                    <div className="card-block">
                        <input className="mr-2" type="text" value={this.state.text} onChange={ev => this.updateText(ev)} />
                    </div>
                    <div className="card-block text-right">
                        <button className="btn" onClick={() => this.props.cancelListEdit()}>
                            Cancel
                        </button>
                        <button className="btn btn-primary" onClick={() => this.submit()}>
                            Save
                        </button>
                    </div>
                </div>
            )
            : null;
    }
}

const mapStateToProps = state => ({ list: getEdittedList(state.lists) });
const mapDispatchToProps = { cancelListEdit, updateList };

export default connect(mapStateToProps, mapDispatchToProps)(ListManager);