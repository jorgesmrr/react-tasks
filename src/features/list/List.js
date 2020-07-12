import React from 'react';
import { getListById, openList } from './listSlice';
import { connect } from 'react-redux';

class List extends React.Component {
    render() {
        return (
            <li className="p-2 my-2" onClick={() => this.props.openList(this.props.list.id)}>
                {this.props.list.name}
            </li>
        )
    }
}

const mapStateToProps = (state, ownProps) => ({ list: getListById(state.lists, ownProps.id) });
const mapDispatchToProps = { openList };

export default connect(mapStateToProps, mapDispatchToProps)(List);