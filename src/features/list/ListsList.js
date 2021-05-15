import React from "react";
import List from "./List";
import { connect } from "react-redux";
import Modal from "@bit/jorgemoreira.headless-react.surface.modal";
import ListManager from "./ListManager";
import NewList from "./ListCreator";
import { getListsIds } from "./listSlice";
import ListItem from "../common/ListItem";
import ModalCard from "../common/ModalCard";

class ListsList extends React.Component {
    state = { createList: false, edittedListId: null };

    createList() {
        this.setState({ createList: true });
    }

    cancelListCreation() {
        this.setState({ createList: false });
    }

    editList(id) {
        this.setState({ edittedListId: id });
    }

    cancelListEdition() {
        this.setState({ edittedListId: null });
    }

    renderListCreator() {
        return this.state.createList ? (
            <NewList
                onSuccess={() => this.cancelListCreation()}
                onCancel={() => this.cancelListCreation()}
            />
        ) : null;
    }

    renderListManager() {
        return this.state.edittedListId ? (
            <ListManager
                id={this.state.edittedListId}
                onSuccess={() => this.cancelListEdition()}
                onCancel={() => this.cancelListEdition()}
            />
        ) : null;
    }

    render() {
        const lists = this.props.listsIds.map((listId) => (
            <List
                key={listId}
                id={listId}
                onOptionsClick={() => this.editList(listId)}
            />
        ));

        return (
            <div>
                <ul>
                    <ListItem
                        icon="fas fa-plus"
                        title="Create new list..."
                        data-test="listCreate"
                        onClick={() => this.createList()}
                    />

                    {lists}
                </ul>

                <Modal
                    show={this.state.createList}
                    onDismiss={() => this.cancelListCreation()}
                >
                    <ModalCard
                        title="New list"
                        onDismiss={() => this.cancelListCreation()}
                    >
                        {this.renderListCreator()}
                    </ModalCard>
                </Modal>
                <Modal
                    show={this.state.edittedListId}
                    onDismiss={() => this.cancelListEdition()}
                >
                    <ModalCard
                        title="Edit list"
                        onDismiss={() => this.cancelListEdition()}
                    >
                        {this.renderListManager()}
                    </ModalCard>
                </Modal>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({ listsIds: getListsIds(state.lists) });

export default connect(mapStateToProps)(ListsList);
