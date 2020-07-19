import React from 'react';
import List from './List';
import { connect } from 'react-redux';
import Modal from '../common/Modal';
import ListManager from './ListManager';
import NewList from './ListCreator';
import PrimaryListItem from '../common/PrimaryListItem';
import { getListsIds } from './listSlice';

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
        return this.state.createList
            ? <NewList
                onSuccess={() => this.cancelListCreation()}
                onCancel={() => this.cancelListCreation()} />
            : null;
    }

    renderListManager() {
        return this.state.edittedListId
            ? <ListManager
                id={this.state.edittedListId}
                onSuccess={() => this.cancelListEdition()}
                onCancel={() => this.cancelListEdition()} />
            : null;
    }

    render() {
        const lists = this.props.listsIds.map(listId => (
            <List
                key={listId}
                id={listId}
                onOptionsClick={() => this.editList(listId)} />
        ))

        return (
            <div>
                <ul>
                    <PrimaryListItem
                        icon="fas fa-plus"
                        title="Create new list..."
                        onClick={() => this.createList()} />

                    {lists}
                </ul>

                <Modal
                    title="New list"
                    show={this.state.createList}
                    onDismiss={() => this.cancelListCreation()}>
                    {this.renderListCreator()}
                </Modal>
                <Modal
                    title="Edit list"
                    show={this.state.edittedListId}
                    onDismiss={() => this.cancelListEdition()}>
                    {this.renderListManager()}
                </Modal>
            </div >
        )
    }
}

const mapStateToProps = (state) => ({ listsIds: getListsIds(state.lists) });

export default connect(mapStateToProps)(ListsList);