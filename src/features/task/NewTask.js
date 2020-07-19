import React from 'react';
import { add } from './taskSlice';
import { connect } from 'react-redux';
import TextField from '../common/TextField';

class NewTask extends React.Component {
    state = { text: '' };

    submit() {
        this.props.add({ listId: this.props.activeListId, text: this.state.text });
        this.props.onSuccess();
    }

    render() {
        return (
            <div>
                <div className="card-block">
                    <TextField
                        label="Description"
                        value={this.state.text}
                        onChange={text => this.setState({ text })} />
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

const mapDispatchToProps = { add };
const mapStateToProps = (state) => ({ activeListId: state.lists.activeListId });

export default connect(mapStateToProps, mapDispatchToProps)(NewTask);