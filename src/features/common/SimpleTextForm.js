import React from 'react';
import TextField from './TextField';

class SimpleTextForm extends React.Component {
    state = { text: '' };

    updateText(text) {
        this.setState({ text })
    }

    submit() {
        this.props.onSubmit(this.state.text);
        this.setState({ text: '' })
    }

    render() {
        return (
            <div className="flex">
                <TextField
                    className="flex-grow mr-2"
                    value={this.state.text}
                    onChange={text => this.updateText(text)} />
                <button className="btn" onClick={() => this.submit()}>
                    Add
                </button>
            </div>
        )
    }
}

export default SimpleTextForm;