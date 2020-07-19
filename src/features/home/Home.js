import React from 'react';
import TasksList from '../task/TasksList';
import ListsList from '../list/ListsList';
import { connect } from 'react-redux';

class Home extends React.Component {
    renderTasks() {
        return this.props.activeListId
            ? <TasksList listId={this.props.activeListId} />
            : <p className="text-neutral-3 p-2">Select a list</p>;
    }

    render() {
        return (
            <div className="content-medium mt-16">
                <div className="flex">
                    <div className="mr-2 w-1/2">
                        <h1 className="mb-6">Lists</h1>
                        <ListsList />
                    </div>

                    <div className="mr-2 w-1/2">
                        <h1 className="mb-6"> Tasks</h1>
                        {this.renderTasks()}
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({ activeListId: state.lists.activeListId });

export default connect(mapStateToProps)(Home);