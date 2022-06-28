import React from "react";
import { connect } from 'react-redux';

function Detail({ toDo }) {
    return(
        <div>
            <h1>{toDo?.text}</h1>
            <h5>Created at: {toDo?.id}</h5>
        </div>
    );
}

function mapStateToProps(state, ownProps) {
    const id = ownProps.match.params.id;
    return {toDo: state.find(todo => todo.id === parseInt(id)) }
}

export default connect(mapStateToProps) (Detail);