import React from "react";
import MasterDetail from "@bit/jorgemoreira.headless-react.surface.master-detail";
import { connect } from "react-redux";
import { getListById } from "../list/listSlice";
import PageSidebar from "./PageSidebar";
import PageMain from "./PageMain";

class Page extends React.Component {
    constructor(props) {
        super(props);
        this.state = { showLists: false };
    }

    componentDidUpdate(prevProps) {
        if (
            this.props.activeList !== prevProps.activeList &&
            this.state.showLists
        ) {
            this.toggleMasterDetail();
        }
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
                    overlayDataTestId="drawerOverlay"
                    master={<PageSidebar />}
                    detail={
                        <PageMain
                            onMenuIconClick={() => this.toggleMasterDetail()}
                        />
                    }
                />
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    activeList: getListById(state.lists, state.lists.activeListId),
});

export default connect(mapStateToProps)(Page);
