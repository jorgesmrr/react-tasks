import React from 'react';
import { getListById, openList, deleteList } from './listSlice';
import { connect } from 'react-redux';

class List extends React.Component {
    deleteList(ev) {
        ev.stopPropagation();
        this.props.deleteList(this.props.list.id)
    }

    render() {
        return (
            <li className="p-2 my-2 flex flex-items-center"
                onClick={() => this.props.openList(this.props.list.id)}>
                {this.props.list.name}
                <i className="fas fa-times ml-auto p-2 bg-default-4"
                    onClick={ev => this.deleteList(ev)} />
            </li>
        )
    }
}

const mapStateToProps = (state, ownProps) => ({ list: getListById(state.lists, ownProps.id) });
const mapDispatchToProps = { openList, deleteList };

export default connect(mapStateToProps, mapDispatchToProps)(List);