import React from 'react';
import TasksList from '../task/TasksList';
import ListsList from '../list/ListsList';
import { connect } from 'react-redux';

class Home extends React.Component {
    renderTasks() {
        return this.props.activeListId
            ? (
                <div className="ml-2 w-1/2">
                    <TasksList listId={this.props.activeListId} />
                </div>
            )
            : <p>Select a list</p>;
    }

    render() {
        return (
            <div className="content-medium mt-16">
                <div className="flex">
                    <div className="mr-2 w-1/2">
                        <ListsList />
                    </div>

                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({ activeListId: state.lists.activeListId });

export default connect(mapStateToProps)(Home);