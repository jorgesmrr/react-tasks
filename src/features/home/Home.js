import React from 'react';
import TasksList from '../task/TasksList';
import NewTask from '../task/NewTask';
import ListsList from '../list/ListsList';
import NewList from '../list/NewList';
import { connect } from 'react-redux';

class Home extends React.Component {
    render() {
        const tasks = this.props.activeListId
            ? (
                <div>
                    <NewTask />
                    <TasksList listId={this.props.activeListId} />
                </div>
            )
            : <p>Select a list</p>;

        return (
            <div className="flex">
                <div className="mr-4">
                    <NewList />
                    <ListsList />
                </div>
                {tasks}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({ activeListId: state.lists.activeListId });

export default connect(mapStateToProps)(Home);