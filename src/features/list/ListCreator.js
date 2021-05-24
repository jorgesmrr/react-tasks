import React from "react";
import { add } from "./listSlice";
import { connect } from "react-redux";
import ListField from "../common/ListField";

class NewList extends React.Component {
    submit(text) {
        if (!text.length) return;

        this.props.add(text);
    }

    render() {
        return (
            <ListField
                icon="fas fa-plus"
                dataTestId="newListName"
                placeholder="Create a new list..."
                onSubmit={(text) => this.submit(text)}
            />
        );
    }
}

const mapDisptachToProps = { add };

export default connect(null, mapDisptachToProps)(NewList);
