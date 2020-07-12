import React from 'react';
import { add } from './listSlice';
import { connect } from 'react-redux';
import SimpleTextForm from '../common/SimpleTextForm';

class NewList extends React.Component {
    render() {
        return (
            <SimpleTextForm onSubmit={text => this.props.add(text)} />
        )
    }
}

const mapDisptachToProps = { add };

export default connect(null, mapDisptachToProps)(NewList);