import React from "react";
import { connect } from "react-redux";
import { deleteList, updateList, getListById } from "./listSlice";
import Field from "@bit/jorgemoreira.headless-react.input.field";
import TextField from "@bit/jorgemoreira.headless-react.input.text-field";

class ListManager extends React.Component {
    state = { name: this.props.list.name };

    delete() {
        this.props.deleteList(this.props.list.id);
        this.props.onSuccess();
    }

    submit() {
        this.props.updateList({
            id: this.props.list.id,
            name: this.state.name,
        });
        this.props.onSuccess();
    }

    render() {
        return this.props.list ? (
            <div>
                <div className="card-block">
                    <Field label="Name">
                        <TextField
                            autoFocus
                            value={this.state.name}
                            onChange={(name) => this.setState({ name })}
                        />
                    </Field>
                </div>
                <div className="flex card-block">
                    <button
                        className="btn btn-danger"
                        data-test="listDelete"
                        onClick={() => this.delete()}
                    >
                        Delete
                    </button>

                    <span className="ml-auto" />

                    <button
                        className="mr-2 btn"
                        onClick={() => this.props.onCancel()}
                    >
                        Cancel
                    </button>
                    <button
                        className="btn btn-primary"
                        onClick={() => this.submit()}
                    >
                        Save
                    </button>
                </div>
            </div>
        ) : null;
    }
}

const mapStateToProps = (state, ownProps) => ({
    list: getListById(state.lists, ownProps.id),
});
const mapDispatchToProps = { deleteList, updateList };

export default connect(mapStateToProps, mapDispatchToProps)(ListManager);
