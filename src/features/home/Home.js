import React from "react";
import MasterDetail from "@bit/jorgemoreira.headless-react.surface.master-detail";
import TasksList from "../task/TasksList";
import ListsList from "../list/ListsList";
import { connect } from "react-redux";
import backgroundImage from "./background.jpg";
import NoListHint from "../common/NoListsHint";

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = { showLists: false };
    }

    componentDidUpdate(prevProps) {
        if (
            this.props.activeListId !== prevProps.activeListId &&
            this.state.showLists
        ) {
            this.toggleMasterDetail();
        }
    }

    renderTasks() {
        return this.props.activeListId ? (
            <TasksList listId={this.props.activeListId} />
        ) : (
            <NoListHint />
        );
    }

    toggleMasterDetail() {
        this.setState({ showLists: !this.state.showLists });
    }

    render() {
        return (
            <div className="h-screen">
                <MasterDetail
                    showMaster={this.state.showLists}
                    masterWidth="30rem"
                    maxContentZIndex={20}
                    onHideMaster={() => this.toggleMasterDetail()}
                    master={
                        <div className="px-4 py-4 bg-white lg:pt-16 lg:shadow-lg">
                            <h1 className="mt-0 mb-6">Lists</h1>
                            <ListsList />
                        </div>
                    }
                    detail={
                        <div className="relative lg:pt-16">
                            <img
                                src={backgroundImage}
                                alt="Background"
                                className="absolute inset-0 object-cover w-full h-full"
                            />
                            <div className="absolute inset-0 opacity-25 bg-neutral-5" />
                            <div className="fixed inset-x-0 top-0 z-20 flex items-center h-20 bg-white shadow-lg lg:hidden">
                                <i
                                    className="mx-4 text-2xl cursor-pointer lg:hidden fas fa-bars hover:text-primary-3"
                                    onClick={() => this.toggleMasterDetail()}
                                />
                                <h1 className="my-0 text-4xl">Tasks</h1>
                            </div>
                            <div className="relative z-10 pt-20 mt-4 lg:mt-0 lg:pt-0 content-medium">
                                {this.renderTasks()}
                            </div>
                        </div>
                    }
                />
            </div>
        );
    }
}

const mapStateToProps = (state) => ({ activeListId: state.lists.activeListId });

export default connect(mapStateToProps)(Home);
