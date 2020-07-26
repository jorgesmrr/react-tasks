import React from 'react';
import { connect } from 'react-redux';
import { deleteList, updateList, getListById } from './listSlice';
import TextField from '../common/TextField';

class ListManager extends React.Component {
    state = { name: this.props.list.name };

    delete() {
        this.props.deleteList(this.props.list.id);
        this.props.onSuccess();
    }

    submit() {
        this.props.updateList({ id: this.props.list.id, name: this.state.name });
        this.props.onSuccess();
    }

    render() {
        return this.props.list
            ? (
                <div>
                    <div className="card-block">
                        <TextField
                            label="Name"
                            value={this.state.name}
                            onChange={name => this.setState({ name })} />
                    </div>
                    <div className="card-block flex">
                        <button className="btn btn-danger"
                            data-test="listDelete"
                            onClick={() => this.delete()}>
                            Delete
                        </button>

                        <span className="ml-auto" />

                        <button className="btn mr-2"
                            onClick={() => this.props.onCancel()}>
                            Cancel
                        </button>
                        <button className="btn btn-primary"
                            onClick={() => this.submit()}>
                            Save
                        </button>
                    </div>
                </div>
            )
            : null;
    }
}

const mapStateToProps = (state, ownProps) => ({ list: getListById(state.lists, ownProps.id) });
const mapDispatchToProps = { deleteList, updateList };

export default connect(mapStateToProps, mapDispatchToProps)(ListManager);