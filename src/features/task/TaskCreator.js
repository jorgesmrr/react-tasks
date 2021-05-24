import React from "react";
import { add } from "./taskSlice";
import { connect } from "react-redux";
import ListField from "../common/ListField";

class NewTask extends React.Component {
    submit(text) {
        if (!text.length) return;

        this.props.add({
            listId: this.props.activeListId,
            text: text,
        });
    }

    render() {
        return (
            <ListField
                icon="fas fa-plus"
                dataTestId="newTaskName"
                placeholder="Type here to add a task..."
                onSubmit={(text) => this.submit(text)}
            />
        );
    }
}

const mapDispatchToProps = { add };
const mapStateToProps = (state) => ({ activeListId: state.lists.activeListId });

export default connect(mapStateToProps, mapDispatchToProps)(NewTask);
