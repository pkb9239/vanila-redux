import React, { useState } from "react";
import { connect } from "react-redux";
import { actionCreators } from "../store";
import ToDo from "../components/ToDo";

function Home({toDos, addToDo}) {
    const [text, setText] = useState("");
    const onChange = (e) => {
        setText(e.target.value);
    }
    const onSubmit = (e) => {
        e.preventDefault();
        addToDo(text);
        setText("");
       
    }
    return (
        <div>
            <h1>To Do</h1>
            <form onSubmit={onSubmit}>
                <input type="text" value={text} onChange={onChange} />
                <button style={{marginLeft: 5}}>ADD</button>

            </form>
            <ul>{toDos.map((todo) => <ToDo key={todo.id} {...todo} />)}</ul>
        </div>
    )
};

function mapStateToProps(state) {
   return {toDos: state};
}

function mapDispatchProps(dispatch) {
    return {
        addToDo: (text) => dispatch(actionCreators.addToDo(text))
    };
}

export default connect(mapStateToProps, mapDispatchProps) (Home);