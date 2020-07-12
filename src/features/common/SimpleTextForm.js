import React from 'react';

class SimpleTextForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { text: '' };
    }

    updateText(ev) {
        this.setState({ text: ev.target.value })
    }

    submit() {
        this.props.onSubmit(this.state.text);
        this.setState({ text: '' })
    }

    render() {
        return (
            <div className="flex">
                <input className="mr-2" type="text" value={this.state.text} onChange={ev => this.updateText(ev)} />
                <button className="btn" onClick={() => this.submit()}>
                    Add
                </button>
            </div>
        )
    }
}

export default SimpleTextForm;