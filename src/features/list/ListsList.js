import React from 'react';
import List from './List';
import { connect } from 'react-redux';
import Modal from '../common/Modal';
import ListManager from './ListManager';
import NewList from './NewList';
import { PrimaryListItem } from '../common/PrimaryListItem';

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
        const lists = Object.values(this.props.lists).map(l => (
            <List
                key={l.id}
                id={l.id}
                onOptionsClick={() => this.editList(l.id)} />
        ))

        return (
            <div>
                <ul>
                    {lists}

                    <PrimaryListItem
                        icon="fas fa-plus"
                        title="Create new list..."
                        onClick={() => this.createList()} />
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

const mapStateToProps = (state) => ({ lists: state.lists.all });

export default connect(mapStateToProps)(ListsList);