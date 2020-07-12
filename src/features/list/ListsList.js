import React from 'react';
import List from './List';
import { connect } from 'react-redux';

class ListsList extends React.Component {
    render() {
        const lists = Object.values(this.props.lists).map(l => <List key={l.id} id={l.id} />)

        return <ul>{lists}</ul>
    }
}

const mapStateToProps = (state) => ({ lists: state.lists.all });

export default connect(mapStateToProps)(ListsList);