import React from 'react';
import { add } from './taskSlice';
import { connect } from 'react-redux';
import SimpleTextForm from '../common/SimpleTextForm';

class NewTask extends React.Component {
    render() {
        return <SimpleTextForm onSubmit={text => this.props.add({ listId: this.props.activeListId, text })} />
    }
}

const mapDispatchToProps = { add };
const mapStateToProps = (state) => ({ activeListId: state.lists.activeListId });

export default connect(mapStateToProps, mapDispatchToProps)(NewTask);