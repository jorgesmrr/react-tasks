import React from 'react';
import { connect } from 'react-redux';
import { cancelListEdit, deleteList, getEdittedList, updateList } from './listSlice';
import TextField from '../common/TextField';

class ListManager extends React.Component {
    constructor(props) {
        super(props);
        this.state = { text: this.props.list.name };
    }

    updateText(text) {
        this.setState({ text })
    }

    delete() {
        this.props.deleteList(this.props.list.id)
    }

    submit() {
        this.props.updateList(this.state.text);
    }

    render() {
        return this.props.list
            ? (
                <div>
                    <div className="card-block">
                        <TextField
                            label="Name"
                            value={this.state.text}
                            onChange={text => this.updateText(text)} />
                    </div>
                    <div className="card-block flex">
                        <button className="btn btn-danger" onClick={() => this.delete()}>
                            Delete
                        </button>

                        <span className="ml-auto" />

                        <button className="btn mr-2" onClick={() => this.props.cancelListEdit()}>
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
const mapDispatchToProps = { cancelListEdit, deleteList, updateList };

export default connect(mapStateToProps, mapDispatchToProps)(ListManager);