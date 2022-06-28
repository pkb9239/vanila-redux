import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { actionCreators } from "../store";
function ToDo({ text, onBtnClick, id }) {
    return (
        <div>
            <Link to={`/${id}`}>
            <li>{text} <button onClick={onBtnClick}>DEL</button></li>
            </Link>
            </div>
    );
};

function mapDispatchToProps(dispatch, ownProps) {
    return {
        onBtnClick: () => dispatch(actionCreators.deleteToDo(ownProps.id))
    }
}

export default connect(null, mapDispatchToProps) (ToDo);
