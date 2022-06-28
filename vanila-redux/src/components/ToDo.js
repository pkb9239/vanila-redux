import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { remove } from "../store";
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
        onBtnClick: () => dispatch(remove(ownProps.id))
    }
}

export default connect(null, mapDispatchToProps) (ToDo);
