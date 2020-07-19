import React from 'react';
import { add } from './listSlice';
import { connect } from 'react-redux';
import TextField from '../common/TextField';

class NewList extends React.Component {
    state = { name: '' };

    submit() {
        this.props.add(this.state.name);
        this.props.onSuccess();
    }

    render() {
        return (
            <div>
                <div className="card-block">
                    <TextField
                        label="Name"
                        value={this.state.name}
                        onChange={name => this.setState({ name })} />
                </div>
                <div className="card-block text-right">
                    <button className="btn mr-2" onClick={() => this.props.onCancel()}>
                        Cancel
                    </button>
                    <button className="btn btn-primary" onClick={() => this.submit()}>
                        Save
                    </button>
                </div>
            </div>
        )
    }
}

const mapDisptachToProps = { add };

export default connect(null, mapDisptachToProps)(NewList);