import React from "react";
import MasterDetail from "@bit/jorgemoreira.headless-react.surface.master-detail";
import TasksList from "../task/TasksList";
import ListsList from "../list/ListsList";
import { connect } from "react-redux";

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = { showLists: true };
    }

    renderTasks() {
        return this.props.activeListId ? (
            <TasksList listId={this.props.activeListId} />
        ) : (
            <p className="p-2 text-neutral-3">Select a list</p>
        );
    }

    toggleMasterDetail() {
        this.setState({ showLists: !this.state.showLists });
    }

    render() {
        return (
            <div className="mt-16 content-medium">
                <MasterDetail
                    showMaster={this.state.showLists}
                    onHideMaster={() => this.toggleMasterDetail()}
                    master={
                        <div className="h-full p-4 mr-2 bg-white lg:p-0">
                            <h1 className="mb-6">Lists</h1>
                            <ListsList />
                        </div>
                    }
                    detail={
                        <div className="mr-2">
                            <i
                                className="cursor-pointer fas fa-bars hover:text-primary-3"
                                onClick={() => this.toggleMasterDetail()}
                            />
                            <h1 className="mb-6">Tasks</h1>
                            {this.renderTasks()}
                        </div>
                    }
                />
            </div>
        );
    }
}

const mapStateToProps = (state) => ({ activeListId: state.lists.activeListId });

export default connect(mapStateToProps)(Home);
